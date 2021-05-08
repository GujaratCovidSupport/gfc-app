import React from "react";
import { Box, Text } from "grommet";
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
    size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    size: "small",
  },
  {
    property: "status",
    header: <Text>Status</Text>,
    size: "small",
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

const RemiList = (props) => {
  const { data } = props;
  return (
    <Box>
      <Text>
        NOTE 1 - As per Govt of Gujarat guideline, the Remedesivir can now only
        be availed through govt hospitals by private hospitals where patient is
        admitted.
      </Text>
      <br />
      <Text>
        NOTE 2 - For Ahmedabad : Checklist for getting Remdesivir from SVP
        Hospital in Ahmedabad.
      </Text>
      <Text>
        1) Patient should be admitted on oxygen bed in Hospital with in AMC
        limit. ✅
      </Text>
      <Text>
        2) Doc1 - Hospital should have Valid C Form issued from AMC ✅
      </Text>
      <Text>
        3) Doc2 - RTPCR report of Patient should be recent, not older than 15
        days. ✅
      </Text>
      <Text>
        4) Doc3 - Doctors should fill the format given on last page ✅
      </Text>
      <Text>
        5) Doc4 - Hospital staff icard who will come for collection ✅
      </Text>
      <br />
      <Text>
        Send 📧 email to remdesivir.tossilamc@gmail.com with above mentioned 4
        documents from hospital ID.
      </Text>
      <Text>If any documents are missing, application can be rejected.</Text>
      <Text>Successful application will get appointment for collecting.</Text>
      <br />
      <ExcelData data={data} columns={columns} />
    </Box>
  );
};

export default RemiList;
