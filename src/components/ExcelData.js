import { DataTable } from "grommet";

export const ExcelData = (props) => {
  const { data, columns } = props;
  // const onLoad = (data, error) => {
  //   if (data) {
  //     const res = JSON.parse(JSON.stringify(data));
  //     //console.log(remi);
  //     setData(res);
  //     // setCities(res.map((x) => x.city).filter((v, i, a) => a.indexOf(v) === i));
  //   } else {
  //     setError(error);
  //   }
  // };

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
