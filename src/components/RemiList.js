import React from "react";
import config from "../config";
import { load } from "../helpers/RemiSheet";
import { Box, DataTable, Text } from "grommet";

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

class RemiList extends React.Component {
  state = {
    remi: [
      {
        id: "fetching...",
        city: "fetching...",
        org: "fetching...",
        contact: "fetching...",
        status: "fetching...",
        remarks: "fetching...",
        verified_on: "fetching...",
      },
    ],
    error: null,
  };

  componentDidMount() {
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
      })
      .then(() => {
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const remi = JSON.parse(JSON.stringify(data.remi));
      //console.log(remi);
      this.setState({ remi });
    } else {
      console.log(error);
      this.setState({ error });
    }
  };

  render() {
    const { remi, error } = this.state;
    //console.log(remi);
    if (error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <Box>
        <Text>
          NOTE 1 - As per Govt of Gujarat guideline, the Remedesivir can now
          only be availed through govt hospitals by private hospitals where
          patient is admitted.
        </Text>
        <br />
        <Text> NOTE 2 - For Ahmedabad : Checklist for getting Remdesivir from SVP Hospital in Ahmedabad.</Text>
        <Text>1) Patient should be admitted on oxygen bed in Hospital with in AMC limit. ✅</Text>
        <Text>2) Doc1 - Hospital should have Valid C Form issued from AMC ✅</Text>
        <Text>3) Doc2 - RTPCR report of Patient should be recent, not older than 15 days. ✅</Text>
        <Text>4) Doc3 - Doctors should fill the format given on last page ✅</Text>
        <Text>5) Doc4 - Hospital staff icard who will come for collection ✅</Text>
        <br />
        <Text>Send 📧 email to remdesivir.tossilamc@gmail.com with above mentioned 4 documents from hospital ID.</Text>
        <Text>If any documents are missing, application can be rejected.</Text>
        <Text>Successful application will get appointment for collecting.</Text>
        <br />
        <DataTable
          border={true}
          background={{
            header: "accent-1",
            body: ["light", "light-3"],
          }}
          margin={"small"}
          resizeable={true}
          sortable={true}
          columns={columns}
          data={remi}
          pin="header"
        />
      </Box>
    );
  }
}

export default RemiList;
