FROM postgres:latest

ENV POSTGRES_USER workshop

ENV POSTGRES_PASSWORD workshop

ENV POSTGRES_DB devops-workshop

ADD create-db.sql /docker-entrypoint-initdb.d/

# docker network create the-network --driver bridge
# docker build -t aliarsal/workshop-project-db:1.0 .
# docker run -itd --rm --init -p 5432:5432 --name the-db --network the-network -v /home/osboxes/labs/devops-workshop-project/db/db-data:/var/lib/postgresql/data aliarsal/workshop-project-db:1.0
# docker exec -it the-db psql -U workshop -d devops-workshop
