# SE577-Course-Project

## Week 8 Deliverable: `proj-Release-4`

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

#### CLI #1 Course prject tab:
##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---
## GitHub OAuth login:
- Login component that has a button that triggers the login request to Github API: a request to the Github API to authorize the app.
- AuthContext to make the global state and actions in the store.
- a simple store that’ll keep hold of the application state.
- a proxy server express app to enable “Access-Control-Allow-Origin”

---
# Need to include experience with OAuth here...
### TBD
