import config from "../config";
import moment from "moment";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Food For Covid Patients!A3:L",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              id: rem[0],
              city: rem[1],
              area: rem[2],
              org: rem[3],
              charges: rem[4],
              ld: rem[5],
              person: rem[6],
              contact: rem[7],
              foodfor: rem[8],
              conditions: rem[9],
              verified_on: moment(rem[11], "DD-MM-YYYY HH:mm:ss").fromNow(),
            })) || [];

          callback(remi);
        },
        (response) => {
          callback(
            false,
            response.result.error,
            "Error in fetching Food Data."
          );
        }
      );
  });
}
