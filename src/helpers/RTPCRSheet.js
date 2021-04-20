import config from "../config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "RT-PCR!A3:J",
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
              verified_on: rem[9]
            })) || [];            

          callback({
            remi,
          });
        },
        (response) => {
          callback(false, response.result.error, "Error in fetching RT-PCR Data.");
        }
      );
  });
}