import config from "../config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Tocilizumab!A3:F",
      })
      .then(
        (response) => {
          const data = response.result.values;

          const remi =
            data.map((rem) => ({
              org: rem[0],
              name: rem[1],
              contact: rem[2],
              timings: rem[3],
              status: rem[4],
              verified_by: rem[5]
            })) || [];            

          callback({
            remi,
          });
        },
        (response) => {
          callback(false, response.result.error, "Error in fetching Tocilizumab Data.");
        }
      );
  });
}