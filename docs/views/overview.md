# Documentation

## Table of Content

1. [Introduction](#introduction)
1. [Services](#services)
1. [Technology](#technology)

## Introduction

Food-for-Thoughts is a social media platform where users can express their thoughts in small posts.

Anyone who visits the app can view the posts. Users can become a member by creating an account. Members can create their own posts and react to the posts of other members. Members can also follow other members to stay up-to-date with their latest thoughts.

This project will be realized using a microservice architecture. The front-end will be written using React and will communicate with multiple services on the back-end. The back-end services are written in C# using the ASP.NET Core framework. 

![c4-Container-Diagram](./images/FFT_c4Container.jpg)

---

## Services
1. [Account service](./services/account_service.md#account-service)
1. [Post service](./services/post_service.md#post-service)

</br>

---

## Technology

### Web application

The frontend web application will be written using React.

</br>

### Web services

The backend of the system will use a microservice architecture. The services are realized in C# using the ASP.NET Core 3.1 framework.

</br>

### API Gateway

The architecture of the system will have an API-Gateway to connect the frontend to the backend. The gateway will be realized in C# using ASP.NET Core 3.1 and the Ocelot framework.

</br>

### Messaging

The service will communicate with each other using a message bus. The bus will be realized using RabbitMQ.

</br>

### Data storage

Data will be stored using MongoDB. MongoDB is a cloud provider where you can host scalable databases.

### DevOps

The documentation will be written in Markdown. This allows us to easily divide our texts into different sections and link them. It creates a minimal tool set for styling, so there is less time spend in there. Markdown view is supported in GitHub and VS Code for easy editing and viewing.

GitHub will be used as DevOps environment. GitHub Actions allows us to create a CI/CD pipeline, so we can build/test/publish our application.

Our CD pipeline will publish a docker image to DockerHub.

We will use SonarCloud for static code coverage.

</br>

### Testing

The back-end will be tested using unit tests.
The front-end can also be tested, React has its own testing library.
Acceptance testing using selenium.
The overall project will go through static code coverage of SonarCloud.

</br>
