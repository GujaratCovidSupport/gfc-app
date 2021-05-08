import React from "react";
import { load } from "../helpers/DoctorSheet";
import { Text } from "grommet";
import { ExcelData } from "./excelData";

const columns = [
  {
    property: "id",
    header: <Text>#</Text>,
    //size: "small",
  },
  {
    property: "city",
    header: <Text>City</Text>,
    //size: "small",
  },
  {
    property: "name",
    header: <Text>Doctor</Text>,
    //size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    size: "small",
  },
  {
    property: "service",
    header: <Text>Service</Text>,
    size: "small",
  },
  {
    property: "time",
    header: <Text>Time</Text>,
    size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    size: "small",
  },
];

const DoctorList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      name: "fetching...",
      contact: "fetching...",
      service: "fetching...",
      time: "fetching...",
      verified_on: "fetching.",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default DoctorList;
