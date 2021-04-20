import React from "react";
import {
  Box,
  Grommet,
  ResponsiveContext,
  Tab,
  Tabs,
  Header,
  Text,
  Anchor,
} from "grommet";
import RemiList from "./components/RemiList";
import MedicalList from "./components/MedicalList";
import DoctorList from "./components/DoctorList";
import EmergencyList from "./components/EmergencyList";
import WebsiteList from "./components/WebsiteList";
import OxygenList from "./components/OxygenList";
import FoodList from "./components/FoodList";
import PlasmaList from "./components/PlasmaList";
import RTPCRList from "./components/RTPCRList";
import AmbList from "./components/AmbuList";
//import TociliList from "./components/TociliList";

const gfc_theme = {
  global: {
    font: {
      family: "Roboto",
    },
  },
};

function App() {
  return (
    <Grommet theme={gfc_theme} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box fill>
            <Header background="brand">
              <Text size="xlarge" margin="small">#GujaratCovidSupport</Text>
              <Anchor margin="small" weight="normal" href="https://forms.gle/YXv43foVgYFHsD17A" label="Have a feedback or want to volunteer?" />
            </Header>
            <Box direction="row" pad="medium">
              <Tabs>
                <Tab title="Remedesivir">
                  <Box pad="medium">
                    <RemiList />
                  </Box>
                </Tab>
                <Tab title="Plasma Support">
                  <Box pad="medium">
                    <PlasmaList />
                  </Box>
                </Tab>
                <Tab title="RT-PCR">
                  <Box pad="medium">
                    <RTPCRList />
                  </Box>
                </Tab>
                <Tab title="Ambulance">
                  <Box pad="medium">
                    <AmbList />
                  </Box>
                </Tab>
                <Tab title="Oxygen">
                  <Box pad="medium">
                    <OxygenList />
                  </Box>
                </Tab>
                <Tab title="Doctor On Call">
                  <Box pad="medium">
                    <DoctorList />
                  </Box>
                </Tab>
                <Tab title="Emergency Number">
                  <Box pad="medium">
                    <EmergencyList />
                  </Box>
                </Tab>
                <Tab title="Medical Store">
                  <Box pad="medium">
                    <MedicalList />
                  </Box>
                </Tab>
                <Tab title="Websites">
                  <Box pad="medium">
                    <WebsiteList />
                  </Box>
                </Tab>
                <Tab title="Food For Patients">
                  <Box pad="medium">
                    <FoodList />
                  </Box>
                </Tab>
                {/* <Tab title="Tocilizumab">
                  <Box pad="medium"><TociliList /></Box>
                </Tab>                 */}
              </Tabs>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
