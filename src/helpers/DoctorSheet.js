import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Doctor on Call!A3:H",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              name: rem[2],
              contact: rem[3],
              service: rem[4],
              time: rem[5],
              verified_on: moment(rem[7], "DD-MM-YYYY HH:mm:ss").fromNow(),
            })) || [];

          callback(remi);
        },
        (response) => {
          callback(
            false,
            response.result.error,
            "Error in fetching Doctor Data."
          );
        }
      );
  });
}
