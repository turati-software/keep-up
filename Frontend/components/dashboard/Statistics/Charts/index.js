import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import MoneyChart from "./MoneyChart";
import MoneyPieChart from "./MoneyPieChart";

import * as projectService from "../../../../services/projectsService";
import * as donationService from "../../../../services/donationsService";

const months = ["Jan","Feb","Mar","Apr","May", "Jun","Jul", "Aug","Sept","Oct","Nov","Dec",];

const moneyReceivedColor = "rgb(54, 162, 235)";
const moneySpentColor = "rgb(194, 194, 194)";

const Charts = ({ suburb,addImageUrl  }) => {

	const [moneySpent, setMoneySpent] = useState([]);
	const [moneyReceived, setMoneyReceived] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			setMoneySpent(await projectService.getMonthlyExpenses(suburb));
			setMoneyReceived(await donationService.getMonthlyDonations(suburb));
			setIsLoading(false);
		})();
	}, [suburb]);

	return (
		<Grid container spacing={2}>
			<Grid item xm={12} xs={12} md={8}>
				<MoneyChart
					id="barChart"
					months={months}
					loading={isLoading}
					moneyReceived={moneyReceived}
					moneyReceivedColor={moneyReceivedColor}
					moneySpentColor={moneySpentColor}
					moneySpent={moneySpent} addImage={addImageUrl}
				/>
			</Grid>
			<Grid item xm={12} xs={12} md={4}>
				<MoneyPieChart id='pieChart'
					months={months}
					moneyReceived={moneyReceived}
					moneySpent={moneySpent}
					moneyReceivedColor={moneyReceivedColor}
					moneySpentColor={moneySpentColor}
					loading={isLoading} addImage={addImageUrl}
				/>
			</Grid>
		</Grid>
	);
};
export default Charts;
