# SE577-Course-Project

## Week 9-10 Deliverable: `proj-final`

# Getting Started with this App Instructions

### Open one cli tab for client-side project:
##### `cd SE577-Course-Project`

##### `npm install`
This command installs a package, and any packages that it depends on.

---
Create a `.env` file in the root folder and set these variables:

`REACT_APP_CLIENT_ID=Your Client ID`

`REACT_APP_CLIENT_SECRET=Your Client Secret`

`REACT_APP_REDIRECT_URI=http://localhost:3000/login`

`REACT_APP_PROXY_URL=http://localhost:5000/authenticate`

`SERVER_PORT=5000`
---

### Open 2nd cli tab within folder for Docker server

Have `Docker` running on local machine

#### CLI #2 Docker server tab:
`docker run --name webserver1 -d -p 5002:5002 trevdevhq/se577-course-server:1.0.1`

###### trev's Docker Hub repo:
`https://hub.docker.com/r/trevdevhq/se577-course-server`

CLI:
`docker pull trevdevhq/se577-course-server`

#### CLI #1 Course prject tab:
##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---
## Architecture Description descisions:

- **Single Page application (React.js)**
  * React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
    * React components implement a `render()` method that takes input data and returns what to display.
    * Breaks The UI Into A Component Hierarchy.
    * `state` is managed within the component (similar to variables declared within a function).
    * `React Router` is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces.

- **GitHub OAuth (Login)**
  * GitHub's OAuth implementation supports the standard authorization code grant type and the OAuth 2.0 Device Authorization Grant for apps that don't have access to a web browser.

- **GitHub Search API**
  * The Search API lets you to search for specific items on GitHub. In this case, `userName` search to obtain user info.

- **Ant Design CSS components**
  * a React UI library `antd` that contains a set of high quality components and demos for building rich, interactive user interfaces...
    * Enterprise-class UI designed for web applications.
    * A set of high-quality React components out of the box.
    * Written in TypeScript with predictable static types.
    * Whole package of design resources and development tools.
    * Internationalization support for dozens of languages.
    * Powerful theme customization in every detail.

- **Splide Library**
  * Splide is a lightweight, flexible and accessible `slider/carousel` written in TypeScript with no dependencies.

- **styled-components library**
  * `styled-components` lets you write actual CSS in your JavaScript. Use all the features of CSS: media queries, all pseudo-selectors, nesting, etc.

- **Docker**
  * Deploy applications in separate containers independently and in different languages. Reduce the risk of conflict between languages, libraries or frameworks.
  * Integrate with your favorite tools throughout your development pipeline
