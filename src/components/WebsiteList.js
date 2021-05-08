import React from "react";
import { Anchor, Text } from "grommet";
import { ExcelData } from "./ExcelData";

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

const WebsiteList = (props) => {
  const { data } = props;
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

  return <ExcelData data={data} columns={columns} />;
};

export default WebsiteList;
