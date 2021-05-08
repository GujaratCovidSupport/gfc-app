import React from "react";
import { load } from "../helpers/OxygenSheet";
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
    property: "name",
    header: <Text>Name</Text>,
    //size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    //size: "small",
  },
  {
    property: "type",
    header: <Text>Type</Text>,
    //size: "small",
  },
  {
    property: "timings",
    header: <Text>Timings</Text>,
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

const OxygenList = (props) => {
  const { data } = props;
  return <ExcelData data={data} columns={columns} />;
};

export default OxygenList;
