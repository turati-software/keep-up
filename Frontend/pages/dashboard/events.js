import router from "next/router";
import { parseCookies } from "nookies";
import EventImage from "../../components/dashboard/EventImage";
import React, { useState, useEffect } from "react";

import { getAll, add, update, remove } from "../../services/eventService";
import { useAppContext } from "../../context/index";
import Dashboard from "../../components/dashboard/Dashboard";
import Table from "../../components/dashboard/Table";
import TableSkeleton from "../../components/TableSkeleton";

const columns = [
  {
    field: "id",
    title: "ID",
    width: 70,
    initialEditValue: Date.now(),
    editable: "never",
  },
  {
    field: "title",
    title: "Title",
    width: 200,
  },
  {
    field: "description",
    title: "Description",
    width: 250,
  },
  {
    field: "date",
    title: "Date",
    width: 180,
    type: "datetime",
  },
  {
    field: "location",
    title: "Location",
    width: 160,
  },
  {
    field: "suburb",
    title: "Suburb",
    width: 130,
    lookup: { sandown: "Sandown", bramley: "Bramley" },
  },
  {
    field: "image",
    title: "Image",
    width: 100,
  },
];

export default function events() {
  const [events, setEvents] = useState([]);
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
      setEvents(await getAll());
      setLoading(false);
    })();
  }, []);

  const handleAddEvent = (event) => (async () => add(event))();
  const handleUpdateEvent = (event) => (async () => update(event))();
  const handleRemoveEvent = (eventId) => (async () => remove(eventId))();

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
          data={events}
          title={"Events"}
          setData={setEvents}
          deleteItem={handleRemoveEvent}
          addItem={handleAddEvent}
          updateItem={handleUpdateEvent}
        />
        <div>
          <EventImage />
        </div>
      </Dashboard>
    );
  }
}
