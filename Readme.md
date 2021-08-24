# Phase-I

You can create any number of microservices you want (`2 at least`).

Better is one of them `should connect to database`. If you are uncomfortable with coding, You can use the code that was presented in the class(Frontend & Backend). If can’t use Database in code, so just add a Database service in docker-compose like Mysql or Mongodb with related environment variables.

The microservices `each` should have `their own Github` repository.

The repositories `should contain` the manifests for `docker-compose` of your microservices.

For now, you will build and push the docker image to your Dockerhub manually for your code.

So you will have at least 2 repositories based on the number of your microservices:
1. `Backend`: Exposes an API endpoint. This repo will contain the `backend code`, `Dockerfile` to build image, `Docker compose` manifest to deploy it.
2. `Frontend`: Calls the backend and displays the result. This repo will contain the `frontend code`, `Dockerfile` to build image, `Docker compose` manifest to deploy it.


### Solution

1. The frontend code is maintained at https://github.com/aliarslan-cs/devops-workshop-frontend. I productionized the docker image using flags from node.js and using a multi-stage build. The Docker Hub repository is hosted at https://hub.docker.com/repository/docker/aliarsal/workshop-project-frontend.
1. The backend code is maintained at https://github.com/aliarslan-cs/devops-workshop-backend. I used golang to create a simple Nicknames registry app and also used a multi-stage builds for its docker image. The Docker Hub repository is hosted at https://hub.docker.com/repository/docker/aliarsal/workshop-project-backend.

# Phase 2

create pipeline for the services and repos.

Add CI/CD to the above microservices repos. Better to add both Github Actions Workflow and Jenkins but one of them is compulsory…
For a sample golang-app, you can see the Github Actions workflow at
https://github.com/kahootali/golang-sample-app/tree/master/.github/workflows
It will be same for all language apps, only Dockerfile will change…
Github Action to build and push Docker Image
https://github.com/marketplace/actions/build-and-push-docker-images

### Solution

The CI/CD pipelines for both backend and frontend application are created using GitHub Actions.

1. the-frontend: https://github.com/aliarslan-cs/devops-workshop-frontend/blob/main/.github/workflows/ci-cd.yml
2. the-backend: https://github.com/aliarslan-cs/devops-workshop-backend/blob/main/.github/workflows/ci-cd.yml

# Phase 3

Add Kubernetes  manifests to deploy your application in the repositories.

When the pipeline of any of your microservice runs, it will build & push a new docker image tag, so you will update that docker image tag in your K8s manifests and apply it on a Kubernetes cluster i.e. minikube in your case.
The Kubernetes manifest should include

- Deployment:
- Service: exposing frontend on NodePort and backend on Cluster IP

### Solution

The deployment manifests for frontend and backend application are available at:

1. the-frontend: https://github.com/aliarslan-cs/devops-workshop-project/tree/main/frontend
2. the-backend: https://github.com/aliarslan-cs/devops-workshop-project/tree/main/backend

The frontend is exposed on Nodeport. The backend had to be exposed on Nodeport as well, as the frontend application is made using React.js which runs primarily on the frontend and communicates to the backend using APIs.

# Phase 4 (Optional):

This is optional phase but do try to complete this, as having knowledge is one thing, but once you implement all this, you can easily work on Kubernetes in future…

In Backend Kubernetes Deployment, add Resources for request and limits on memory & CPU (need to read it yourself), add Probes(readiness & liveness).

Backend should have environment variables NAME and PASSWORD that should be set from a Secret named backend and a file feedback.txt on path /user/feedback.txt  that should be set from Configmap named backend where you can give the feedback for the course

Also in the backend repository add Configmap & Secret manifest files containing above environment variables and file respectively

Also add RBAC files to run above deployment with a Service Account with permissions to get, list, watch Pods cluster wide

Also if you used DB for your app, try to deploy the DB from the public helm chart
Can also add helm chart for the application ( totally optional )

### Solution:

The helm chart scripts for the-db are maintained at https://github.com/aliarslan-cs/devops-workshop-project/tree/main/db.

Note: I could not work on the remaining tasks of Phase 4 yet.
