import uuidv4 from 'uuid/v4';

export default class DialogflowService {
  private sessionId: string;

  constructor() {
    this.sessionId = uuidv4();
  }

  async submit(text: string) {
    const result = await fetch(
      'https://europe-west1-renuochatbot.cloudfunctions.net/dialogflowGateway\n',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: this.sessionId,
          queryInput: {
            text: {
              text,
              languageCode: 'en-US'
            }
          }
        })
      }
    ).then(response => response.json());

    console.log(result);

    return result.fulfillmentText;
  }
}
