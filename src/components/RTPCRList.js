import React from "react";
import { Text } from "grommet";
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
    property: "org",
    header: <Text>Organization</Text>,
    //size: "small",
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
    property: "time",
    header: <Text>Time</Text>,
    //size: "small",
  },
  {
    property: "home",
    header: <Text>Home Collection</Text>,
    //size: "small",
  },
  {
    property: "rtpcr",
    header: <Text>RT-PCR</Text>,
    //size: "small",
  },
  {
    property: "ctscan",
    header: <Text>CT Scan</Text>,
    //size: "small",
  },
  {
    property: "rapid",
    header: <Text>Rapid Antigen</Text>,
    //size: "small",
  },
  {
    property: "status",
    header: <Text>Status</Text>,
    //size: "small",
  },
  {
    property: "remarks",
    header: <Text>Remarks</Text>,
    //size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    //size: "small",
  },
];

const RTPCRList = (props) => {
  const { data } = props;
  return <ExcelData data={data} columns={columns} />;
};

export default RTPCRList;
