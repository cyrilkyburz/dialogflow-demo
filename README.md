# Dialogflow Demo

This project contains two folder, the frontend in the chatbot folder and a firebase cloud functions which acts as a Endpoint for the Dialogservice. Make sure to be in the correct folder before running the commands.

## Frontend 

Simple react app, you can run it with:

```sh
yarn start
```

### Deployment

```sh
yarn deploy
```

## Cloudfunction

This folder contains the firebase function, you will need to provide a Google Cloud Project Service Account and reference it correctly in the index.js file. Then you can run it locally with:

```sh
yarn serve
``` 

### Deployment

First login

```sh
firebase login
```

Change the .firebaserc to your project name or delete it and run:

```sh
firebase init 
```

Deploy your cloud function.

```sh
yarn deploy
```
