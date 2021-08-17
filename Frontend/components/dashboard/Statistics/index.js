import React, { useState } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import SuburbSelector from "./SuburbSelector";
import Charts from "./Charts";
import Cards from "./Cards";
// import PdfDocument from "./PdfDocument";
function Statistics() {
  const [suburb, setSuburb] = useState("sandown");
  const [canGeneratePDF, setCanGeneratePDF] = useState(false);

  const [chartsImages, setChartsImages] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const handleSuburbChange = (e) => {
    if (e === "All") {
      setSuburb(null);
    } else {
      setSuburb(e);
    }
  };
  const handleCardDataChange = (data) => {
    setCardsData(data);
  };

  const addImageUrl = (imageUrl) => {
    const urls = chartsImages;
    if (imageUrl) {
      urls.push(imageUrl);
      setChartsImages(urls);
    }
    if (urls.length >= 2) {
      setCanGeneratePDF(true);
    }
  };

  const generatePDF = () => {
    console.log(chartsImages);
    // PdfDocument(cardsData, chartsImages);
  };
  return (
    <div id="dashboard">
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item sm={6}>
            <SuburbSelector
              suburb={suburb}
              onSuburbChange={(e) => handleSuburbChange(e)}
            />
          </Grid>
          <Grid item sm={6}>
            <Button
              color="primary"
              variant="contained"
              disabled={!canGeneratePDF}
              onClick={() => generatePDF()}
            >
              Download Report{" "}
            </Button>
          </Grid>
        </Grid>
        <Cards suburb={suburb} getData={handleCardDataChange} />
        <Charts suburb={suburb} addImageUrl={addImageUrl} />
      </Container>
    </div>
  );
}

export default Statistics;
