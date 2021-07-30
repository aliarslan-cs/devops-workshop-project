FROM node:16
ENV NODE_ENV=production
# ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
# RUN npm install

COPY . .

# todo: should actually do yarn build for prod, see readme
ENTRYPOINT ["yarn", "start"]

# docker build -t aliarsal/workshop-project-frontend:1.0 .
# docker run -it --rm --init -p 8090:3000 --name the-frontend --network the-network aliarsal/workshop-project-frontend:1.0