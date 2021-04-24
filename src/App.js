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
  Footer,
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
import CCCList from "./components/CCCList";
import SurgicalList from "./components/SurgicalList";
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
          <Box>
            <Header background="brand" direction="row-responsive">
              <Text size="xlarge" margin="small">
                #GujaratCovidSupport
              </Text>
              <Anchor
                margin="small"
                weight="normal"
                href="https://forms.gle/YXv43foVgYFHsD17A"
                label="Have a feedback or want to volunteer?"
              />
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
                <Tab title="Surgical Equipments">
                  <Box pad="medium">
                    <SurgicalList />
                  </Box>
                </Tab>
                <Tab title="Covid Care Center">
                  <Box pad="medium">
                    <CCCList />
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
            <Footer background="brand" pad="medium" direction="column">
              <Text>
                Disclaimer: This is volunteer run effort. Portal shares list of
                verified contacts for different COVID-19 help and services.
                Although team verifies each contact while adding it to the
                portal, it may be very much possible that help resource is out
                of supply. We suggest users to refer 'Verified On' column in
                every tab to judge freshness of data.
              </Text>
              <Anchor
                weight="normal"
                href="https://forms.gle/YXv43foVgYFHsD17A"
                label="Should you have any feedback or query, please contact us here."
              />
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
