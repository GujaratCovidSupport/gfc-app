import React from "react";
import { load } from "../helpers/TociliSheet";
import { Text } from "grommet";
import { ExcelData } from "./ExcelData";

const columns = [
  {
    property: "org",
    header: <Text>Organization</Text>,
    size: "small",
  },
  {
    property: "name",
    header: <Text>Contact Person</Text>,
    size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    size: "small",
  },
  {
    property: "timings",
    header: <Text>Timings</Text>,
    size: "small",
  },
  {
    property: "status",
    header: <Text>Status</Text>,
    size: "small",
  },
  {
    property: "verified_by",
    header: <Text>Verified By</Text>,
    size: "small",
  },
];

const TociliList = () => {
  const remi = [
    {
      org: "fetching...",
      name: "fetching...",
      contact: "fetching...",
      timings: "fetching...",
      status: "fetching...",
      verified_by: "fetching...",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default TociliList;
