# SE577-Course-Project

## Week 6 Deliverable: `proj-Release-3`

# Getting Started with this App Instructions

#### CLI #1 Course prject tab:
##### `cd SE577-Course-Project`

##### `npm install`

This command installs a package, and any packages that it depends on.

### Open 2nd cli tab within folder for Docker server

#### CLI #2 Docker server tab:
`docker run --name webserver1 -d -p 5002:5002 trevdevhq/se577-course-server:1.0.0`

###### trev's Docker Hub repo:
`https://hub.docker.com/r/trevdevhq/se577-course-server`

#### CLI #1 Course prject tab:
##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---
## architectural model

- *__The Docker daemon__* listens for Docker API requests and manages Docker objects such as images.

- *__The Docker client__* is the primary way that many Docker users interact with Docker.

- *__A Docker registry__* stores Docker images.

- When you use the `docker pull` or `docker run` commands, the required images are pulled from the configured registry.

- An *__image__* is a read-only template with instructions for creating a Docker container.

- A *__container__* is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.

- docker is used to host the API data for use in the UI:

![architecture model](images/architectural-model.png "My Architectural Model")
