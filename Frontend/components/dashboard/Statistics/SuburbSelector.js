import React, {  useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const SuburbSelector = ({ suburb, onSuburbChange }) => {
	const [suburbs, setSuburbs] = useState([
		{
			id: 1,
			name: "sandown",
		},
		{
			id: 2,
			name: "bramley",
		},
	]);

	return (
		<FormControl style={{ marginBottom: "20px" }}>
			<InputLabel shrink htmlFor="age-native-label-placeholder">
				Suburbs
			</InputLabel>
			<Select name="Suburbs" value={suburb} onChange={onSuburbChange}>
				{suburbs.map((suburb) => (
					<MenuItem key={suburb.id} value={suburb.name}>
						{suburb.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SuburbSelector;
