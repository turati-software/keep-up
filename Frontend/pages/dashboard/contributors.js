import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Cookies from "js-cookie";
import Table from "../../components/dashboard/Table";
import router from "next/router";
import { parseCookies } from "nookies";
import { useAppContext } from "../../context/index";
import { getAll, add, remove, update } from "../../services/contributorService";
import TableSkeleton from "../../components/TableSkeleton";
const columns = [
  {
    field: "id",
    title: "ID",
    width: 70,
    initialEditValue: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    editable: "never",
  },
  { field: "name", title: "Name", width: 160 },
  {
    field: "amount",
    title: "Contribution Amount(R)",
    width: 250,
    type: "currency",
    currencySetting: {
      locale: "en-ZA",
      currencyCode: "zar",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    initialEditValue: 0,
  },
  { field: "location", title: "Location", width: 160 },
  { field: "site", title: "Website", width: 200 },
  {
    field: "suburb",
    title: "Suburb",
    width: 130,
    lookup: { sandown: "Sandown", bramley: "Bramley" },
  },
];

export default function contributors() {
  const [suburb, setSuburb] = useState("Unknown");
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { checkSession } = useAppContext();

  useEffect(() => {
    setSuburb(Cookies.get("suburb"));
    const cookies = parseCookies();
    if (
      Object.keys(cookies).length !== 0 &&
      cookies.constructor === Object &&
      cookies.token
    ) {
      checkSession();
    } else {
      router.push("/dashboard/signin");
    }
    (async () => {
      setLoading(true);
      setContributors(await getAll());
      setLoading(false);
    })();
  }, [suburb]);

  const deleteItem = (contributorId) =>
    (async () => await remove(contributorId))();
  const addItem = (newData) => (async () => await add(newData))();
  const updateItem = (newData) => (async () => await update(newData))();
  if (loading) {
    return (
      <Dashboard>
        <TableSkeleton />
      </Dashboard>
    );
  } else {
    return (
      <Dashboard>
        <Table
          columns={columns}
          data={contributors}
          setData={setContributors}
          title={"Contributors"}
          deleteItem={deleteItem}
          addItem={addItem}
          updateItem={updateItem}
        />
      </Dashboard>
    );
  }
}
