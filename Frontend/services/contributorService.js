import { http } from "./httpService";
import { toast } from "react-toastify";
const currentDate = new Date();

export const remove = async (contributorId) => {
	try {
		await http.delete(`/deleteContributor/${contributorId}`);
	} catch (error) {
		console.error(error);
		toast.error("Failed to remove contributor");
	}
};
export const add = async (contributor) => {
	try {
		await http.post("/postContributors", contributor);
	} catch (error) {
		console.error(error.message);
		toast.error("failed to add Contributor");
	}
};
export const update = async (contributor) => {
	try {
		await http.patch(`updateContributor/${contributor.id}`, contributor);
	} catch (error) {
		console.error(error);
		toast.error("Failed to update");
	}
};

export const getAll = async () => {
	const path = `/getContributors`;
	try {
		const { data } = await http.get(path);
		return data;
	} catch (error) {
		console.error(error.message);
		toast.error("An error Occured");
	}
};
export const getAllBySuburb = async (suburb) => {
	const path = `/getContributors?suburb=${suburb}`;
	try {
		const { data } = await http.get(path);
		return data;
	} catch (error) {
		console.error(error.message);
		toast.error("An error Occured");
	}
};

export const getAllByMonthAndSuburb = async (
	suburb,
	month,
	year = currentDate.getFullYear()
) => {
	try {
		let result;
		result = await getAllBySuburb(suburb);
		return result.filterByMonthAndYear(month, year);
	} catch (error) {
		console.error(error.message);
		toast.error("An error Occured");
	}
};
