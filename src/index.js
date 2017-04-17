
var config = require('config');
var request = require("request");
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

//Viber
const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const TextMessage = require("viber-bot").Message.Text;

//dependancies 
//var keyboards = require("./keyboards.js");
//var constants = require("./constants.js");
var logger = require("./logger.js");

//response from viber
var viber_resp = null;
//response from watson
var watson_resp = null;

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: process.env.W_C_USERNAME, 
  password: process.env.W_C_PASSWORD, 
  path: { workspace_id: process.env.W_C_WORKSPACE_ID }, 
  version_date: '2016-07-11'
});
//Viber
const viber_bot = new ViberBot( {
    authToken: process.env.VIBER_AUTH_TOKEN,
    name: process.env.VIBER_NAME,
    avatar: process.env.VIBER_AVATAR // Just a placeholder avatar to display the user
});

// Start conversation with empty message.
//conversation.message({}, processResponse);
//Let viber start the conservation

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  watson_resp = response;
  //
  console.log(JSON.stringify(response.context, null, 2));
  // If an intent was detected, log it out to the console.
  //if (response.intents.length > 0) {
    //console.log('Detected intent: #' + response.intents[0].intent);
  //}

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }

  // Prompt for the next round of input.
  //var newMessageFromUser = prompt('>> ');
  //conversation.message({
  //  input: { text: newMessageFromUser },
  //    context : response.context,
  //  }, processResponse)

  //message to user
  say(viber_resp,response.output.text[0]);
}


function say(response, message, tracking=null) {
      response.send(new TextMessage(message),tracking);
}


viber_bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {

    logger.log(message);
    
    viber_resp = response;

    conversation.message({
    input: { text: message.text },
      context : watson_resp == null ? null : watson_resp.context,
    }, processResponse);


});




if ( process.env.HEROKU_URL) {

    const http = require("http");
    const port = process.env.PORT || 8080;

    http.createServer(viber_bot.middleware()).listen(port, () => viber_bot.setWebhook( process.env.HEROKU_URL));
} else {
    logger.log("Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.");
 }