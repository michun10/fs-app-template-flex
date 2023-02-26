const router = require("express").Router();
const { welcome, defaultFallback } = require("../webhook/intents/welcomeExit");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const { WebhookClient } = require("dialogflow-fulfillment");

const {
  models: { User },
} = require("../db");

router.get("/", (req, res) => {
  res.send("Server is working");
});

router.post("/", async (req, res) => {
  //   console.log(req.headers.authorization);
  console.log(req.headers);
  //   const user = await User.findByToken(req.headers.authorization);

  const tag = req.body.fulfillmentInfo.tag;

  console.log(req.body);
  let jsonResponse;

  if (tag === "confirm") {
    jsonResponse = {
      sessionInfo: {
        parameters: {
          "cancel-period": 2,
        },
      },
    };
  }

  console.log("STARTS HERE", res.json(jsonResponse));
  res.json(jsonResponse);
});

module.exports = router;
