import React from "react";
import config from "../config";
import { load } from "../helpers/FoodSheet";
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

class FoodList extends React.Component {
  state = {
    remi: [
      {
        id: "fetching...",
        city: "fetching...",
        area: "fetching...",
        org: "fetching...",
        charges: "fetching...",
        ld: "fetching...",
        person: "fetching...",
        contact: "fetching...",
        foodfor: "fetching...",
        conditions: "fetching...",
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

export default FoodList;
