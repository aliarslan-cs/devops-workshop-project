FROM golang:alpine as build

EXPOSE 8080

RUN go env -w GO111MODULE=auto

RUN apk add git

RUN go get -t github.com/lib/pq

RUN go get -t github.com/rs/cors

WORKDIR /app

COPY main.go .

RUN go build main.go
 
CMD ["./main"]

# --------------------- #

FROM alpine

LABEL name="Golang Application" \
      maintainer="Ali Arslan <aliarsal@outlook.com>" \
      summary="Backend golang application for workshop-project"

EXPOSE 8080 

WORKDIR /app

COPY --from=build ./app/main ./
 
CMD ["./main"]

# docker build -t aliarsal/workshop-project-backend:1.0 .
# docker run -it --rm --init -p 8080:8080 --name the-backend --network the-network aliarsal/workshop-project-backend:1.0


