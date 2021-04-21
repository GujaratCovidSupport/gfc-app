import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Websites for COVID19!A3:G",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              website: rem[2],
              purpose: rem[3],
              details: rem[4],
              verified_on: moment(rem[6], "DD-MM-YYYY HH:mm:ss").fromNow(),
            })) || [];            

          callback({
            remi,
          });
        },
        (response) => {
          callback(false, response.result.error, "Error in fetching Websites for COVID 19 Data.");
        }
      );
  });
}