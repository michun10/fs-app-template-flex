const router = require("express").Router();
const { findSite } = require("./intents/findSite");
const { updateAddress } = require("./intents/updateAddress");
const { updateEmail } = require("./intents/updateEmail");

const {
  models: { User },
} = require("../db");

router.get("/", (req, res) => {
  res.send("Server is working");
});

router.post("/", async (req, res) => {
  const tag = req.body.fulfillmentInfo.tag;
  const parameters = req.body.sessionInfo.parameters;

  let jsonResponse;

  if (tag === "confirm") {
    jsonResponse = await findSite(parameters.zipcode);
  }

  if (tag === "updateAddress") {
    jsonResponse = await updateAddress(parameters.address);
  }

  if (tag === "updateEmail") {
    jsonResponse = await updateEmail(parameters.email);
  }

  res.json(jsonResponse);
});

module.exports = router;
