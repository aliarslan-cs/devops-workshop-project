FROM postgres:latest
ENV POSTGRES_USER workshop
ENV POSTGRES_PASSWORD workshop
ENV POSTGRES_DB devops-workshop
ADD create-db.sql /docker-entrypoint-initdb.d/

# docker build -t aliarsal/workshop-project-db:1.0 .
# docker run -it --rm --init --name mydb -v /home/osboxes/labs/devops-workshop-project/db/db-data:/var/lib/postgresql/data aliarsal/workshop-project-db:1.0
# docker exec -it mydb psql -U workshop -d devops-workshop
