import React from "react";
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import creds from '../../../Gmail/credentials.json';

// Client ID and API key from the Developer Console
const CLIENT_ID = creds.web.client_id;
const API_KEY = creds.web.client_secret;

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

const authorizeButton = document.getElementById('authorize_button');
const signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function (error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listLabels();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  const pre = document.getElementById('content');
  const textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
  gapi.client.gmail.users.labels.list({
    'userId': 'me'
  }).then(function (response) {
    const labels = response.result.labels;
    appendPre('Labels:');

    if (labels && labels.length > 0) {
      for (i = 0; i < labels.length; i++) {
        const label = labels[i];
        appendPre(label.name)
      }
    } else {
      appendPre('No Labels found.');
    }
  });
}

const Gmail = () => {

console.log(creds);
  console.log("CLIENT_ID", CLIENT_ID);
  console.log("API_KEY", API_KEY);
  return (

    <Layout>
      <Helmet>
        <title>Mesivta Gaon Yaakov ~ Contact us page</title>
        <meta name="description" content="Contact Page"/>
        <script async defer src="https://apis.google.com/js/api.js"
                onload="this.onload=function(){};handleClientLoad()"
                onreadystatechange="if (this.readyState === 'complete') this.onload()">
        </script>
      </Helmet>
      <div id="main" className="alt">
        <p>Gmail API Quickstart</p>

        {/*Add buttons to initiate auth sequence and sign out*/}
        <button id="authorize_button" style={{'display': 'none'}}>Authorize</button>
        <button id="signout_button" style={{'display': 'none'}}>Sign Out</button>

        <pre id="content" style={{'whiteSpace': 'pre-wrap'}}></pre>
      </div>

    </Layout>



  )
}

export default Gmail;