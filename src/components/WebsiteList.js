import React from "react";
import config from "../config";
import { load } from "../helpers/WebsiteSheet";
import { DataTable, Anchor, Text } from "grommet";

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
    render: datum => (
      <Anchor href={datum.website} label="Tap Here" />
    ),
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

class WebsiteList extends React.Component {
  state = {
    remi: [
      {
        id: "fetching...",
        city: "fetching...",
        website: "fetching...",
        purpose: "fetching...",
        details: "fetching...",
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

export default WebsiteList;
