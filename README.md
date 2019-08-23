# ReactAPP Spotify Search

This i an React App that fetch data from the Spotify wep api. The app uses Redux for state management, Materialize for design and spotify-web-api-js to fetch data easier.

## Authenticating code

The authenticating code against the Spotify Web API in "app.js" is basicly made by cloning [This project](https://github.com/spotify/web-api-auth-examples) and take whats nessesary from there.

## Installation

This run on Node.js for servercode and React.js for the client.

To run on local machine, clone the repository and install its dependencies running:

    $ npm install

### Usage

You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application.

Once you have created your app, you will need to create the "config" folder and add "keys.js" in it with

```
module.exports = {
  client_id: "YOUR CLIENT ID",
  client_secret: "YOUR CLIENT SECRET",
  redirect_uri: "http://localhost:5000/callback",
  redirect: "http://localhost:3000/#"
};
```

## Running the examples

In order to run the app on local machine, use

    $ npm run dev

Then, open `http://localhost:3000` in a browser.
