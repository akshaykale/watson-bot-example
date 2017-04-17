
var request = require("request");
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

//Viber
const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const TextMessage = require("viber-bot").Message.Text;

var RestClient = require('node-rest-client').Client;
var restClient = new RestClient();

//dependancies 
var keyboards = require("./keyboards.js");
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

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  watson_resp = response;

  if(response.output.nodes_visited[0]=='golf_search_request_confirmed'){
    restClient.get("https://akshay-api.herokuapp.com/gora/golfcourse?place="+response.context.place+"&date="+response.context.date, function (data, response) {
          // parsed response body as js object 
          logger.log(data);
          // raw response 
          //logger.log(response);
          var tracking_data = {
            previous:"golf"
          };
          say(viber_resp, "Here are the golf courses.",keyboards.get('golfcourse',data),tracking_data);
      });
  }else if(response.output.nodes_visited[0]=='item_search_request_confirmed' || response.output.nodes_visited[0]=='item_search_request_confirmed_'){
      restClient.get("https://akshay-api.herokuapp.com/gora/ichibaitem?keyword="+response.context.item+"&gender="+response.context.gender, function (data, response) {
          // parsed response body as js object 
          logger.log(data);
          // raw response 
          //logger.log(response);
          var tracking_data = {
            previous:"ichiba"
          };
          say(viber_resp, "Here is the result of your search.",keyboards.get('ichibaitem', data),tracking_data);
          
      });
  }else{
    say(viber_resp,response.output.text[0]);
  }
}


function say(response, message, keyboard=null, tracking=null) {
      response.send(new TextMessage(message,keyboard),tracking);
}


viber_bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {

    logger.log(message);
    
    var track_data = message.trackingData;
    if( track_data){
      if (track_data.previous == "golf" || track_data.previous == "ichiba"){
        say(response,"You can also buy for Items related to golf OR Ask for hotels/accomodation within the area.", null, null);
        return;      
    }
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