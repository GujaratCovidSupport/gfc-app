import React from "react";
import config from "../config";
import { load } from "../helpers/RTPCRSheet";
import { DataTable, Text } from "grommet";

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
    property: "status",
    header: <Text>Status</Text>,
    //size: "small",
  },
  {
    property: "remarks",
    header: <Text>Remarks</Text>,
    size: "small",
  },
  {
    property: "verified_on",
    header: <Text>Verified On</Text>,
    //size: "small",
  },
];

class RTPCRList extends React.Component {
  state = {
    remi: [
      {
        id: "fetching...",
        city: "fetching...",
        org: "fetching...",
        person: "fetching...",
        contact: "fetching...",
        time: "fetching...",
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
      />
    );
  }
}

export default RTPCRList;
