import { Box, Select, Spinner } from "grommet";
import RemiList from "./RemiList";
import PlasmaList from "./PlasmaList";
import RTPCRList from "./RTPCRList";
import AmbList from "./AmbuList";
import OxygenList from "./OxygenList";
import SurgicalList from "./SurgicalList";
import CCCList from "./CCCList";
import DoctorList from "./DoctorList";
import NursingList from "./NursingList";
import EmergencyList from "./EmergencyList";
import MedicalList from "./MedicalList";
import WebsiteList from "./WebsiteList";
import FoodList from "./FoodList";
import { useState } from "react";
import { useEffectOnce } from "react-use";
import config from "../config";
import { load as RemiLoad } from "../helpers/RemiSheet";
import { load as PlasmaLoad } from "../helpers/PlasmaSheet";
import { load as RTPCRLoad } from "../helpers/RTPCRSheet";
import { load as AmbuLoad } from "../helpers/AmbuSheet";
import { load as OxygenLoad } from "../helpers/OxygenSheet";
import { load as SurgicalLoad } from "../helpers/SurgicalSheet";
import { load as CCCLoad } from "../helpers/CCCSheet";
import { load as DoctorLoad } from "../helpers/DoctorSheet";
import { load as NursingLoad } from "../helpers/NursingSheet";
import { load as EmergencyLoad } from "../helpers/EmergencySheet";
import { load as MedicalLoad } from "../helpers/MedicalSheet";
import { load as WebSiteLoad } from "../helpers/WebsiteSheet";
import { load as FoodLoad } from "../helpers/FoodSheet";

const filterItems = [
  {
    title: "Remedesivir",
    content: (data) => <RemiList data={data} />,
    load: RemiLoad,
  },
  {
    title: "Plasma Support",
    content: (data) => <PlasmaList data={data} />,
    load: PlasmaLoad,
  },
  {
    title: "COVID19 Reports",
    content: (data) => <RTPCRList data={data} />,
    load: RTPCRLoad,
  },
  {
    title: "Ambulance",
    content: (data) => <AmbList data={data} />,
    load: AmbuLoad,
  },
  {
    title: "Oxygen Sources",
    content: (data) => <OxygenList data={data} />,
    load: OxygenLoad,
  },
  {
    title: "Surgical Equipments",
    content: (data) => <SurgicalList data={data} />,
    load: SurgicalLoad,
  },
  {
    title: "Covid Care Center",
    content: (data) => <CCCList data={data} />,
    load: CCCLoad,
  },
  {
    title: "Doctor On Call",
    content: (data) => <DoctorList data={data} />,
    load: DoctorLoad,
  },
  {
    title: "Nursing Staff",
    content: (data) => <NursingList data={data} />,
    load: NursingLoad,
  },
  {
    title: "Emergency Number",
    content: (data) => <EmergencyList data={data} />,
    load: EmergencyLoad,
  },
  {
    title: "Medical Store",
    content: (data) => <MedicalList data={data} />,
    load: MedicalLoad,
  },
  {
    title: "Websites",
    content: (data) => <WebsiteList data={data} />,
    load: WebSiteLoad,
  },
  {
    title: "Food For Patients",
    content: (data) => <FoodList data={data} />,
    load: FoodLoad,
  },
];

const Loading = () => {
  return (
    <Box direction="row" justify="center" pad="medicum">
      <Spinner
        border={[
          {
            side: "all",
            color: "brand",
            size: "medium",
            style: "dotted",
          },
        ]}
      />
    </Box>
  );
};

export const Filter = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("All");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(filterItems[0].title);

  const initClient = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
      })
      .then(() => {
        console.log("Sheet Initiated...");
        filterItems[0].load(onLoad);
      });
  };

  const onLoad = (data, error) => {
    setLoading(true);
    if (data) {
      const res = JSON.parse(JSON.stringify(data));
      setData(res);
      setFilteredData(res);
      setCities([
        city,
        ...res.map((x) => x.city).filter((v, i, a) => a.indexOf(v) === i),
      ]);
    } else {
      setError(error);
    }
    setLoading(false);
  };

  useEffectOnce(() => {
    window.gapi.load("client", initClient);
  });

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Box direction="row" pad="medium">
        <Box pad="medium">
          <Select
            id="title-filter"
            name="title-filter"
            value={filter}
            options={filterItems.map((x) => x.title)}
            onChange={({ option }) => {
              setLoading(true);
              setFilter(option);
              setCity("All");
              filterItems.find((x) => x.title === option).load(onLoad);
            }}
          />
        </Box>
        <Box pad="medium">
          {loading ? null : (
            <Select
              id="select-city"
              name="select-city"
              value={city}
              placeholder={"Select City"}
              options={cities}
              onChange={({ option }) => {
                setCity(option);
                if (option === "All") {
                  setFilteredData(data);
                } else {
                  setFilteredData(data.filter((x) => x.city === option));
                }
              }}
            />
          )}
        </Box>
      </Box>

      {loading ? (
        <Loading />
      ) : (
        <Box direction="row" pad="medium">
          {filterItems.find((x) => x.title === filter).content(filteredData)}
        </Box>
      )}
    </>
  );
};
