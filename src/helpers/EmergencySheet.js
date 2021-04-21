import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Emergency Number!A3:I",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              org: rem[2],
              contact: rem[3],
              service: rem[4],
              status: rem[5],
              remarks: rem[6],
              verified_on: moment(rem[8], "DD-MM-YYYY HH:mm:ss").fromNow(),
            })) || [];            

          callback({
            remi,
          });
        },
        (response) => {
          callback(false, response.result.error, "Error in fetching Emergency Contact Data.");
        }
      );
  });
}