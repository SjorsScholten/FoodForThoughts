# Delivery Sprint 1

## Sprint Goals

Create the initial architecture document and walking skeleton for the individual project.

## Sprint Achievements

- Architecture document
- Walking Skeleton
    - GitHub environment
    - Backend services
    - Frontend service
- API Gateway using ocelot
- Local development environment in docker

## Project Link

GitHub: https://github.com/SjorsScholten/FoodForThoughts

## Documentation

Documentation can be found in the project folders under ```docs```

## CI/CD

There is currently only a CI pipeline active for the backend services, they build each service individually on push or PR.

[
    Later Additions:
    - add publish to docker hub
    - add SonarCloud code coverage
    - add Test runs
    - add frontend building
]: #

## Planning Next Sprint

- Connect the frontend to backend using rest calls
- Implement the first user stories
    - As a user, I want to create an account
    - As a user, I want to search accounts
    - As a user, I want to create a post
    - As a user, I want to search posts
