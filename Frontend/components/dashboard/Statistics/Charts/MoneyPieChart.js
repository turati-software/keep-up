import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { sumOf } from "../../../../utils/helpers";
import { Skeleton } from "@material-ui/lab";
import html2canvas from "html2canvas";

const MoneyPieChart = ({ moneyReceived, moneySpent, loading, addImage }) => {
	const data = {
		labels: ["Received (R)", "Spent (R)"],
		datasets: [
			{
				label: "# Money (R)",
				data: [sumOf(moneyReceived), sumOf(moneySpent)],
				backgroundColor: ["rgb(54, 162, 235)", "rgb(194, 194, 194)"],
			},
		],
	};
	useEffect(() => {
		if (
			moneySpent &&
			moneyReceived &&
			!loading &&
			document.getElementById("piecard") !== null
		) {
			setTimeout(() => {
				html2canvas(document.getElementById("piecard")).then((canvas) => {
					canvas.toBlob(
						(blob) => addImage(URL.createObjectURL(blob)),
						"image/jpeg",
						1
					);
				});
			}, 6000);
		}
	}, [moneyReceived]);
	if (loading) return displaySkeleton();

	return (
		<Card id="piecard">
			<CardContent>
				<div className="header">
					<Typography style={{ margin: "10px" }} variant="h6">
						Money Total
					</Typography>
				</div>
				<Pie type="pie" data={data} />
			</CardContent>
		</Card>
	);
};
export default MoneyPieChart;

const displaySkeleton = () => {
	return (
		<Card>
			<CardContent>
				<div className="header">
					<Typography variant="h6">
						<Skeleton variant="text" />
					</Typography>
				</div>
				<Grid container justifyContent="center">
					<Grid item style={{ padding: "10px" }}>
						<Skeleton variant="circle" width={270} height={270} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
