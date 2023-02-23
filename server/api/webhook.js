const router = require("express").Router();
const { WebhookClient } = require("dialogflow-fulfillment");
const { welcome, defaultFallback } = require("./intents/welcomeExit");

router.get("/", (req, res) => {
  res.send("Server is working");
});

router.post("/", express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));
  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", defaultFallback);
  agent.handleRequest(intentMap);
});

module.exports = router;
