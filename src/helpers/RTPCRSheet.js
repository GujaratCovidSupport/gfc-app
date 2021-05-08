import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "COVID19 Reports!A3:N",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              org: rem[2],
              person: rem[3],
              contact: rem[4],
              time: rem[5],
              status: rem[6],
              remarks: rem[7],
              verified_on: moment(rem[9], "DD-MM-YYYY HH:mm:ss").fromNow(),
              home: rem[10],
              rtpcr: rem[11],
              ctscan: rem[12],
              rapid: rem[13],
            })) || [];

          callback(remi);
        },
        (response) => {
          callback(
            false,
            response.result.error,
            "Error in fetching RT-PCR Data."
          );
        }
      );
  });
}
