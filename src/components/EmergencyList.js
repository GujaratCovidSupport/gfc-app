import React from "react";
import { load } from "../helpers/EmergencySheet";
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
    size: "small",
  },
  {
    property: "org",
    header: <Text>Organization</Text>,
    size: "small",
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
    property: "status",
    header: <Text>Status</Text>,
    size: "small",
  },
  {
    property: "remarks",
    header: <Text>Remarks</Text>,
    size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    size: "small",
  },
];

const EmergencyList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      org: "fetching...",
      contact: "fetching...",
      service: "fetching...",
      status: "fetching...",
      remarks: "fetching...",
      verified_on: "fetching...",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default EmergencyList;
