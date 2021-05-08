import React from "react";
import { load } from "../helpers/PlasmaSheet";
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
    property: "platform",
    header: <Text>Platform</Text>,
    size: "small",
  },
  {
    property: "person",
    header: <Text>Contact Person</Text>,
    size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
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

const PlasmaList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      platform: "fetching...",
      person: "fetching...",
      contact: "fetching...",
      remarks: "fetching...",
      verified_on: "fetching.",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default PlasmaList;
