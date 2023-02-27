const axios = require("axios");

const findSite = async (loc_admin_zip) => {
  const response = await axios.get(
    `https://data.cdc.gov/resource/5jp2-pgaw.json?$where=loc_admin_zip=%27${loc_admin_zip}%27`
  );

  const sites = response.data;

  const site = sites.filter(
    (site) => !!site.loc_name && !!site.loc_admin_street1 && !!site.loc_phone
  )[0];

  if (site) {
    jsonResponse = {
      sessionInfo: {
        parameters: {
          loc_name: site.loc_name,
          loc_admin_street: site.loc_admin_street1,
          loc_phone: site.loc_phone,
        },
      },
    };
  } else {
    jsonResponse = {
      sessionInfo: {
        parameters: {},
      },
    };
  }
  // prettier-ignore

  return jsonResponse;
};
module.exports = { findSite };
