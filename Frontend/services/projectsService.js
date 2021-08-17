import { http } from "./httpService";
import * as helper from "../utils/helpers";
import { toast } from "react-toastify";
const currentDate = new Date();
const projects_url = `/getProjects`;

export const add = async (newData) => {
	try {
		http.post(`/postProjects`, newData);
	} catch (error) {
		toast.error(`Failed to add project : ${error.message}`);
	}
};

export const update = (newData) => {
	try {
		http.patch(`/updateProject`, newData);
	} catch (error) {
		toast.error(`Failed to update project : ${error.message}`);
	}
};

export const remove = (projectId) => {
	try {
		http.delete(`deleteProject/${projectId}`);
	} catch (error) {
		toast.error(`Failed to delete project : ${error.message}`);
	}
};

export const getAll = async () => {
	try {
		const result = await http.get(projects_url);
		return result.data;
	} catch (error) {
		toast.error(`Failed to get projects : ${error.message}`);
	}
};

export const getByMonthAndSuburb = async (
	suburb,
	month,
	year = currentDate.getFullYear()
) => {
	try {
		let results;
		if (suburb) results = await getBySuburb(suburb);
		else results = await getAll();

		if (results.length > 0) {
			return results.filterByMonthAndYear(month, year);
		}
		return results;
	} catch (error) {
		toast.error(`An error occured : ${error.message}`);
	}
};

export const getBySuburb = async (suburb) => {
	const params = `?suburb=${suburb}`;
	try {
		const result = await http.get(projects_url + params);
		return result.data;
	} catch (error) {
		toast.error(`An error occured : ${error.message}`);
	}
};

export const getUpComing = async (suburb) => {
	try {
		let projects;

		if (suburb) projects = await getBySuburb(suburb);
		else projects = await getAll();

		return projects.filter(
			(project) => new Date(project.startDate).getTime() > currentDate.getTime()
		);
	} catch (error) {
		toast.error(`An error occured : ${error.message}`);
	}
};
export const getMonthlyExpenses = async (suburb) => {
	try {
		const spentArr = [];
		let projects;
		if (suburb) projects = await getBySuburb(suburb);
		else projects = await getAll();

		for (let x = 0; x <= currentDate.getMonth(); x++) {
			const results = projects.filter(
				(proj) => new Date(proj.startDate).getMonth() === x
			);
			const sum = helper.sumOf(results, "spend");
			spentArr.push(sum);
		}

		return spentArr;
	} catch (e) {
		toast.error(`An error occured : ${e.message}`);
	}
};
export const getCompleted = async (suburb, month = null) => {
	try {
		let results;

		if (month != null)
			results = await getByMonthAndSuburb(
				suburb,
				month,
				currentDate.getFullYear()
			);
		else if (suburb) results = await getBySuburb(suburb);
		else results = await getAll();

		if (results.length > 0)
			return results.filter(
				(proj) => new Date(proj.endDate).getTime() < currentDate.getTime()
			);

		return results;
	} catch (error) {
		toast.error(`An error occured : ${error.message}`);
	}
};
