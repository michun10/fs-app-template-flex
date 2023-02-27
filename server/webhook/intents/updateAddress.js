const axios = require("axios");

const updateAddress = async (address) => {
  // const token = window.localStorage.getItem("token");
  // console.log(token);
  // const response = await axios.put("/api/users/", address, {
  //   headers: {
  //     authorization: token,
  //   },
  // });
  // const addressUpdated = response.data;
  // // prettier-ignore
  // jsonResponse = {
  //   sessionInfo: {
  //     parameters: {
  //       address: addressUpdated,
  //     },
  //   },
  // };
  // return jsonResponse;
};
module.exports = { updateAddress };
