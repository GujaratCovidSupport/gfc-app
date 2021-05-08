import React from "react";
import {
  Anchor,
  Box,
  Footer,
  Grommet,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from "grommet";
import { Filter } from "./components/Filter";

const gfc_theme = {
  global: {
    font: {
      family: "Roboto",
    },
  },
  menu: {
    background: "brand",
  },
  anchor: {
    color: {
      dark: "white",
      light: "white",
    },
    weight: "normal",
  },
};

const App = () => {
  return (
    <Grommet theme={gfc_theme} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box>
            <ResponsiveContext.Consumer>
              {(responsive) =>
                responsive === "small" ? (
                  <Header background="brand" pad="medium" direction="column">
                    <Box direction="row" align="center" gap="small">
                      <Anchor
                        size="large"
                        weight="normal"
                        href="https://www.gujaratcovidsupport.org"
                      >
                        #GujaratCovidSupport
                      </Anchor>
                    </Box>
                    <Nav direction="column" align="center">
                      <Menu
                        label="Donate Plasma"
                        items={[
                          {
                            label: "English",
                            onClick: () => {
                              window.location.href =
                                "https://forms.gle/pdgsP6avND8W2xER8";
                            },
                          },
                          {
                            label: "ગુજરાતી",
                            onClick: () => {
                              window.location.href =
                                "https://forms.gle/hxcsJD3opaCks47e7";
                            },
                          },
                        ]}
                      />
                      <Anchor
                        alignSelf="center"
                        weight="normal"
                        href="https://www.gujaratcovidsupport.org/donate/"
                        label="Donate Funds"
                      />
                      <Anchor
                        alignSelf="center"
                        weight="normal"
                        href="https://forms.gle/YXv43foVgYFHsD17A"
                        label="Volunteer"
                      />
                    </Nav>
                  </Header>
                ) : (
                  <Header background="brand" pad="small">
                    <Box direction="row" align="center" gap="small">
                      <Anchor
                        size="large"
                        weight="normal"
                        href="https://www.gujaratcovidsupport.org"
                      >
                        #GujaratCovidSupport
                      </Anchor>
                    </Box>
                    <Nav direction="row">
                      <Menu
                        label="Donate Plasma"
                        items={[
                          {
                            label: "English",
                            onClick: () => {
                              window.location.href =
                                "https://forms.gle/pdgsP6avND8W2xER8";
                            },
                          },
                          {
                            label: "ગુજરાતી",
                            onClick: () => {
                              window.location.href =
                                "https://forms.gle/hxcsJD3opaCks47e7";
                            },
                          },
                        ]}
                      />
                      <Anchor
                        alignSelf="center"
                        weight="normal"
                        href="https://www.gujaratcovidsupport.org/donate/"
                        label="Donate Funds"
                      />
                      <Anchor
                        alignSelf="center"
                        weight="normal"
                        href="https://forms.gle/YXv43foVgYFHsD17A"
                        label="Volunteer"
                      />
                    </Nav>
                  </Header>
                )
              }
            </ResponsiveContext.Consumer>
            <Filter />
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
};

export default App;
