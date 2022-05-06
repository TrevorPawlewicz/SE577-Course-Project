# SE577-Course-Project
---
# Getting Started with this App Instructions

#### CLI #1 Course prject tab:
##### `cd SE577-Course-Project`

##### `npm install`

This command installs a package, and any packages that it depends on.

### Open 2nd cli tab within folder for Docker server

#### CLI #2 Docker server tab:
`docker run --name webserver1 -d -p 5002:5002 trevdevhq/se577-course-server:1.0.0`

#### CLI #1 Course prject tab:
##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

##### Installing and setting up the development environment (and relevant tools)

| Tools      | Version used | Location  |
| -----------|:------------:| :--------:|
| Git        | 2.21.0       | https://git-scm.com |
| Node.js    | 15.13.0      | https://nodejs.org |
| npm        | 7.7.6        | https://www.npmjs.com/ |
| Yarn       | 1.22.10      | https://yarnpkg.com/en/docs/install |
| Docker     | 20.10.14     | https://www.docker.com/ |
