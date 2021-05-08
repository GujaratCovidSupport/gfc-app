import React from "react";
import { Anchor, Text } from "grommet";
import { load } from "../helpers/WebsiteSheet";
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
    property: "website",
    header: <Text>Website</Text>,
    render: (datum) => <Anchor href={datum.website} label="Tap Here" />,
  },
  {
    property: "purpose",
    header: <Text>Purpose</Text>,
    //size: "small",
  },
  {
    property: "details",
    header: <Text>Details</Text>,
    size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    size: "small",
  },
];

const WebsiteList = () => {
  const remi = [
    {
      id: "fetching...",
      city: "fetching...",
      website: "fetching...",
      purpose: "fetching...",
      details: "fetching...",
      verified_on: "fetching...",
    },
  ];

  return <ExcelData initialData={remi} columns={columns} load={load} />;
};

export default WebsiteList;
