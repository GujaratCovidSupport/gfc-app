import config from "../config";

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
              person: rem[4],
              contact: rem[5],
              remarks: rem[6],
              verified_on: rem[8]
            })) || [];            

          callback({
            remi,
          });
        },
        (response) => {
          callback(false, response.result.error, "Error in fetching Plasma Support Data.");
        }
      );
  });
}