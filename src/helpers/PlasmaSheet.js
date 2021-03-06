import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Plasma Support!A3:H",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              platform: rem[2],
              person: rem[3],
              contact: rem[4],
              remarks: rem[5],
              verified_on: moment(rem[7], "DD-MM-YYYY HH:mm:ss").fromNow(),
            })) || [];

          callback(remi);
        },
        (response) => {
          callback(
            false,
            response.result.error,
            "Error in fetching Plasma Support Data."
          );
        }
      );
  });
}
