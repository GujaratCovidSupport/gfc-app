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

const DoctorList = (props) => {
  const { data } = props;
  return <ExcelData data={data} columns={columns} />;
};

export default DoctorList;
