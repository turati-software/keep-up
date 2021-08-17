import React, { useState, useEffect } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Table from "../../components/dashboard/Table";
import { useAppContext } from "../../context/index";
import router from "next/router";
import { parseCookies } from "nookies";
import TableSkeleton from "../../components/TableSkeleton";
import { getAll, add, remove, update } from "../../services/projectsService";
const columns = [
  {
    title: "ID",
    field: "id",
    initialEditValue: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    editable: "never",
  },
  {
    title: "Description",
    field: "description",
  },
  {
    title: "Start Date",
    field: "startDate",
    type: "datetime",
  },
  { title: "End Date", field: "endDate", type: "datetime" },
  {
    title: "Cost",
    field: "amount",
    type: "currency",
    currencySetting: {
      locale: "en-ZA",
      currencyCode: "zar",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    initialEditValue: 0,
  },
  {
    title: "Suburb",
    field: "suburb",
    lookup: { sandown: "Sandown", bramley: "Bramley" },
  },
];
export default function projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { checkSession } = useAppContext();

  useEffect(() => {
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
      setProjects(await getAll());
      setLoading(false);
    })();
  }, []);

  const addItem = (newData) => (async () => add(newData))();
  const updateItem = (newData) => (async () => update(newData))();
  const deleteItem = (projectId) => (async () => remove(projectId))();

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
          data={projects}
          title={"Projects"}
          setData={setProjects}
          deleteItem={deleteItem}
          addItem={addItem}
          updateItem={updateItem}
        />
      </Dashboard>
    );
  }
}
