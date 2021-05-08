import { DataTable } from "grommet";
import { useState } from "react";
import config from "../config";
import { useEffectOnce } from "react-use";

export const ExcelData = (props) => {
  const { initialData, columns, load } = props;
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialData);

  const initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
      })
      .then(() => {
        load(onLoad);
      });
  };

  useEffectOnce(() => {
    window.gapi.load("client", initClient);
  });

  const onLoad = (data, error) => {
    if (data) {
      const res = JSON.parse(JSON.stringify(data));
      //console.log(remi);
      setData(res);
    } else {
      setError(error);
    }
  };

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
      data={data}
      pin="header"
    />
  );
};
