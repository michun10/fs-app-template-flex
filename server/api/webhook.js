const router = require("express").Router();
const { WebhookClient } = require("dialogflow-fulfillment");

router.get("/", (req, res) => {
  res.send("Server is working");
});

/**
 * on this route dialogflow send the webhook request
 * For the dialogflow we need POST Route.
 * */
router.post("/", (req, res) => {
  // get agent from request
  let agent = new WebhookClient({ request: req, response: res });
  console.log(agent);
  // create intentMap for handle intent
  let intentMap = new Map();
  // add intent map 2nd parameter pass function
  intentMap.set("webhook-demo", handleWebHookIntent);
  // now agent is handle request and pass intent map
  agent.handleRequest(intentMap);
});
function handleWebHookIntent(agent) {
  agent.add("Hello I am Webhook demo How are you...");
}

module.exports = router;
