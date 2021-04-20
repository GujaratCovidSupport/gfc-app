import React from "react";
import config from "../config";
import { load } from "../helpers/TociliSheet";
import { DataTable, Text } from "grommet";

const columns = [
  {
    property: "org",
    header: <Text>Organization</Text>,
    size: "small",
  },
  {
    property: "name",
    header: <Text>Contact Person</Text>,
    size: "small",
  },
  {
    property: "contact",
    header: <Text>Contact</Text>,
    size: "small",
  },
  {
    property: "timings",
    header: <Text>Timings</Text>,
    size: "small",
  },
  {
    property: "status",
    header: <Text>Status</Text>,
    size: "small",
  },
  {
    property: "verified_by",
    header: <Text>Verified By</Text>,
    size: "small",
  },
];

class TociliList extends React.Component {
  state = {
    remi: [
      {
        org: "fetching...",
        name: "fetching...",
        contact: "fetching...",
        timings: "fetching...",
        status: "fetching...",
        verified_by: "fetching...",
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
          header: 'accent-1',
          body: ['light', 'light-3'],
        }}
        margin={"small"}
        resizeable={true}
        sortable={true}
        columns={columns}
        data={remi}
        pin="header"
      />
    );
  }
}

export default TociliList;
