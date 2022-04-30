# SE577-Course-Project

## Week 5 Deliverable: `proj-Release-2`

 Take the code you created in Week 3 and create a simple microservice to simulate listing repositories in git.  Pull the code from the proj-Release-1 branch and create a new branch called proj-Release-2.  Your interface will now call this service and render the results in the web interface.  Think about the data structure that you would use, and the microservice interface (e.g., attributes that would be returned for a collection of repositories).  To keep things easy, instead of using a database (which you could add as a stretch objective), think about how you can express this in an external config file in YAML format, and then parse this file into an in-memory data structure that your microservice can use to return data to your web application.  Create a file called Release2.md and provide in Section 1 appropriate instructions to run and test your application.

---
# Getting Started with this App Instructions


##### `cd SE577-Course-Project`

##### `npm install`

This command installs a package, and any packages that it depends on.

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
