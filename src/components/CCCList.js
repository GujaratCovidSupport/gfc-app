import React from "react";
import { load } from "../helpers/CCCSheet";
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
    property: "org",
    header: <Text>Organization</Text>,
    size: "small",
  },
  {
    property: "address",
    header: <Text>Address</Text>,
    size: "small",
  },
  {
    property: "person",
    header: <Text>Person</Text>,
    //size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    //size: "small",
  },
  {
    property: "remarks",
    header: <Text>Remarks</Text>,
    size: "small",
  },
  {
    property: "status",
    header: <Text>Status</Text>,
    //size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    //size: "small",
  },
];

const CCCList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      org: "fetching...",
      address: "fetching...",
      person: "fetching...",
      contact: "fetching...",
      remarks: "fetching...",
      status: "fetching...",
      verified_on: "fetching.",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default CCCList;
