import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useForm, Controller } from "react-hook-form";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { SnackbarProvider, useSnackbar } from "notistack";

// const AWS = require("aws-sdk");
// const docClient = new AWS.DynamoDB.DocumentClient({
//   apiVersion: "2012-08-12",
//   region: "eu-central-1",
// });

const S3_BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
const S3_REGION = process.env.NEXT_PUBLIC_AWS_BUCKET_REGION;
const S3_URL = process.env.NEXT_PUBLIC_AWS_S3_URL;
const { NEXT_PUBLIC_AWS_COGNITO_POOL_ID } = process.env;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Form = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [eventID, setEventID] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    console.log(data);
    handleUploadClick();
  };

  const handleClose = () => {
    document.getElementById("event-photo").reset();
  };

  const handleUploadClick = async (event) => {
    const file = event;
    console.log("Event: ", event);
    console.log("File: ", file);

    const s3 = new S3Client({
      region: S3_REGION,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: S3_REGION }),
        identityPoolId: NEXT_PUBLIC_AWS_COGNITO_POOL_ID,
      }),
    });

    const uploadParams = {
      Bucket: S3_BUCKET_NAME,
      Key: "image-name",
      Body: file,
      Tagging: "Event ID=0123456789",
    };

    try {
      const upload = await s3.send(new PutObjectCommand(uploadParams));
      const object = `${S3_URL}${uploadParams.Key}`;
      console.log("Upload Data:", upload);
      console.log("Object URL: ", object);

      // const tableParams = {
      //   TableName: "keep-up-dev-events",
      //   Item: {
      //     eventId: { N: "001" },
      //     date: { S: "Date" },
      //     description: { S: "Description" },
      //     location: { S: "Location" },
      //     suburb: { S: "Suburb" },
      //     title: { S: "Title" },
      //     ImageURL: { S: `${object}` },
      //   },
      // };

      // docClient.put(tableParams, function (err, data) {
      //   if (err) {
      //     console.log("DB Error:", err);
      //   } else {
      //     console.log("DB Success: ", data);
      //   }
      // });

      enqueueSnackbar("Photo uploaded successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      const timer = setTimeout(() => {
        window.location.reload();
      }, 4000);
      return () => clearTimeout(timer);
    } catch (err) {
      console.log("Error: ", err);
      enqueueSnackbar("Upload was unsuccessful...", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Add Event Photo:
      </Typography>
      <form
        id="event-photo"
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="eventid"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Event ID"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Event ID required" }}
        />
        <div>
          <CardContent>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <input
                  required
                  accept="image/*"
                  className={classes.input}
                  type="file"
                />
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Upload Photo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
