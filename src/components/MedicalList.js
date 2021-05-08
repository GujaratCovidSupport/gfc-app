import React from "react";
import { load } from "../helpers/MedicalSheet";
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
    property: "area",
    header: <Text>Area</Text>,
    //size: "small",
  },
  {
    property: "name",
    header: <Text>Name</Text>,
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

const MedicalList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      area: "fetching...",
      name: "fetching...",
      contact: "fetching...",
      remarks: "fetching...",
      verified_on: "fetching.",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default MedicalList;
