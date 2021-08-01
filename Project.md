# Phase-I

You can create any number of microservices you want (`2 at least`).

Better is one of them `should connect to database`. If you are uncomfortable with coding, You can use the code that was presented in the class(Frontend & Backend). If can’t use Database in code, so just add a Database service in docker-compose like Mysql or Mongodb with related environment variables.

The microservices `each` should have `their own Github` repository.

The repositories `should contain` the manifests for `docker-compose` of your microservices.

For now, you will build and push the docker image to your Dockerhub manually for your code.

So you will have at least 2 repositories based on the number of your microservices:
1. `Backend`: Exposes an API endpoint. This repo will contain the `backend code`, `Dockerfile` to build image, `Docker compose` manifest to deploy it.
2. `Frontend`: Calls the backend and displays the result. This repo will contain the `frontend code`, `Dockerfile` to build image, `Docker compose` manifest to deploy it.

# Phase 2

create pipeline for the services and repos.

Add CI/CD to the above microservices repos. Better to add both Github Actions Workflow and Jenkins but one of them is compulsory…
For a sample golang-app, you can see the Github Actions workflow at
https://github.com/kahootali/golang-sample-app/tree/master/.github/workflows
It will be same for all language apps, only Dockerfile will change…
Github Action to build and push Docker Image
https://github.com/marketplace/actions/build-and-push-docker-images


# Phase 3

Add Kubernetes  manifests to deploy your application in the repositories.

When the pipeline of any of your microservice runs, it will build & push a new docker image tag, so you will update that docker image tag in your K8s manifests and apply it on a Kubernetes cluster i.e. minikube in your case.
The Kubernetes manifest should include

- Deployment:
- Service: exposing frontend on NodePort and backend on Cluster IP
