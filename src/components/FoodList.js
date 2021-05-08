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
    property: "area",
    header: <Text>Area Covered</Text>,
    //size: "large",
  },
  {
    property: "org",
    header: <Text>Organization</Text>,
    //size: "small",
  },
  {
    property: "charges",
    header: <Text>Charges</Text>,
    //size: "small",
  },
  {
    property: "ld",
    header: <Text>Lunch/Dinner</Text>,
    //size: "small",
  },
  {
    property: "person",
    header: <Text>Contact Person</Text>,
    size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact Number</Text>,
    //size: "small",
  },
  {
    property: "foodfor",
    header: <Text>Food For?</Text>,
    size: "small",
  },
  {
    property: "conditions",
    header: <Text>Conditions</Text>,
    size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    //size: "small",
  },
];

const FoodList = (props) => {
  const { data } = props;

  return <ExcelData data={data} columns={columns} />;
};

export default FoodList;
