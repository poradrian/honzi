# About

This web app displays some of your Spotify stats such as top artist/tracks, the latest played tracks and audio features (acoustincness, danceability, liveness etc) by fetching data from the Spotify Web API.
As a junior, throughout this project I gained a better understanding about building and deploying a full-stack web app.

## Code Style
I used the automatic code-formatter [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/docs/user-guide/getting-started), a static code analysis tool for identifying problematic patterns found in ECMAScript code. Shortly put, ESLint is more concerned about what the code does and Prettier about what the code looks. These tools allow the developer to waste less time and energy on things like "*what is the spacing or is there a need for a comma or semicolon in a particular place, is a variable well named? are you using good accesibility practices*", which can help with writing better code faster by taking care of some issues automatically. 
Both tools offer customization but I used the default config because I don't have strong opinions on this matter and I prefer letting the recommended automatization take care of it.

There can be an overlap between the two tools because ESLint can worry (not as good as Prettier) by itself about how the code looks but you can set them up so they can work together in a good way.

## Back-end

Tools: NodeJS, Express, Heroku.

The topics explored on the server-side were: **REST APIs**, **HTTP requests**, and the implementation of the authorization protocol **OAuth**, to allow users to log in with their Spotify account.

The server in NodeJS was created using the Express framework, instead of the native `http` module that ships with NodeJS. Using Express made some parts easier to implement (such as routes) and another good part is that it also has a healthy community with plenty resources to help building out API's. The `POST` request was set up using the **axios** library because it provides an easier API compared to Node's native module. 

<img src="https://developer.spotify.com/assets/AuthG_ClientCredentials.png" width="500" height="432">

*Spotify's OAuth Client Credentials Flow*

Before implementing the OAuth flow, it was necessary to integrate the app and manage the Spotify credentials in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login). After the app was registered, the last step before initiating the 0Auth flow was to get the **client id** and **client secret** strings from the developer dashboard and add them in the .env file at the root of the project. These unique strings are needed to identify and authenticate a particular app when requesting an access token.

## Front-end

Tools: React(v17), [React Router(v6)](https://reactrouter.com/), [Windi CSS](https://github.com/windicss/windicss)

The build tool for setting up the development environment for React was [ViteJS](https://vitejs.dev/), which provides fast development experience for modern web projects by using a dev server with Hot Module Replacement (HMR) over the native ES module.

On the front-end, the project was configured to run both the client-side and server-side code at the same time by adding the `postinstall` npm script to the root `package.json` and make it run npm install in the front-end directory.

The Spotify OAuth access token retrieved from the Node server was passed to React with the help of the `URLSearchParams()` constructor that creates and returns a new `URLSearchParams` object. `localStorage` was used to store the access and refresh tokens. Once the `localStorage` was set up, fetching and displaying data from Spotify was done with the help of the `useState` and `useEffect` hooks.

A different React hook used was `lazy` in the `App.jsx` component which is the first component rendered when the users loads the application. The component renders the `AuthenticatedApp` if there's a user, or else `UnauthenticatedApp` component. If a user checks out the application for the first time, they're not going to be logged in, so the `UnauthenticatedApp` component will be rendered. In that case, all of the code for the entire application was loaded under the AuthenticateApp which is unnecessary because the user cannot see/interact with anything from the application. 
By lazy-loading the `AuthenticatedApp`, only the `UnauthenticatedApp` component can be loaded at first, then the `AuthenticatedApp` will load once the user is logged in. `lazy` requires a `Suspense fallback` to display when the code is loading and it also requires the modules imported to be **exported by default**. 
It's true that the impact is not big here because the optimization was done in a small project like this but in a bigger project it will be more beneficial.

 ```bash
import React, { lazy, Suspense, useEffect, useState } from 'react';

import { FullPageSpinner } from './styles/lib';

const AuthenticatedApp = lazy(() => import('./Authenticated'));
const UnauthenticatedApp = lazy(() => import('./Unauthenticated'));

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div>
      <Suspense fallback={<FullPageSpinner />}>
        {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </div>
  );
}

```

The styling was done with the help of Windi CSS, an utility-first CSS framework, similar to Tailwind. One of the advantages of a CSS framework with predefined utility classes is that you don't have to waste time and energy to come up with names for the classes. On the other hand, I had to rely on vanilla CSS to add styling in some places.


landing page profile photo source: <https://unsplash.com/photos/wKAOlN4A644>
