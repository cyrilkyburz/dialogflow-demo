const functions = require('firebase-functions');
const cors = require('cors')({ origin: true});
const serviceAccount = require('./service-account.json');
const { SessionsClient } = require('dialogflow');

exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { queryInput, sessionId } = request.body;

    const sessionClient = new SessionsClient({ credentials: serviceAccount  });
    const session = sessionClient.sessionPath('dialogflow-playground-254910', sessionId);
    const responses = await sessionClient.detectIntent({ session, queryInput});
    const result = responses[0].queryResult;

    response.send(result);
  });
});
