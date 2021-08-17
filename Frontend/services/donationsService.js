import { http } from "./httpService";
import * as helper from "../utils/helpers";

import { toast } from "react-toastify";

const currentMonth = new Date().getMonth();

export const getAll = async () => {
  try {
    const { data } = await http.get(`/getDonations`);
    return data;
  } catch (error) {
    console.error(error.message);
    toast.error("Failed to get  Donations");
  }
};

export const getMonthlyDonations = async (suburb) => {
  try {
    const moneyReceivedArr = [];
    let allDonations;

    if (suburb) allDonations = await getAllBySuburb(suburb);
    else allDonations = await getAll();

    for (let x = 0; x <= currentMonth; x++) {
      const results = allDonations.filter(
        (donation) => new Date(donation.transactionDate).getMonth() === x
      );
      const sum = helper.sumOf(results, "amount");
      moneyReceivedArr.push(sum);
    }
    return moneyReceivedArr;
  } catch (e) {
    console.error(e.message);
    toast.error("Failed to get  monthly donations");
  }
};
export const getAllByMonthAndSuburb = async (suburb, month, year = null) => {
  try {
    if (year === null) year = new Date().getFullYear();

    let results;
    if (suburb) results = await getAllBySuburb(suburb);
    else results = await getAll();

    if (results.length > 0)
      return results.filterByMonthAndYear(month, year, "transactionDate");

    return results;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllBySuburb = async (suburb) => {
  try {
    const { data } = await http.get(`/getDonations?suburb=${suburb}`);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
