# How do we set-up a long term project?

## Creating an Organization and Configuring Teams
You can create an organization under your personal account -> your organizations.

You can add members to the organization in the people tab.

You can create a Team from the Teams tab.

After a team is created you can add members to that team in the members tab of the created team.

### Good Practice
- It is recommended to have at least 2 owners in an organization to prevent loss of ownership (Pilot Owner, GitHub Manager)

</br>

## Creating a Project
> **Only make Projects for the organization!** </br>
It is possible to make projects for repositories, but these apply only to the repository they belong to. You want all your boards on a central place as well. You can disable projects in the repository settings.


Within the project settings you can set the visibility of the project.


Assign the right team to the project

Link the repositories to the project.


## Creating Repositories

### Creating a Master Repository

### Creating Branches
- *Development branch:* the main project branch, when a feature is finished it can be merged into the project.
- *Deployment branch:* pushing to this branch will update the App to a new version.
- *Team branch:* will be made for each feature that needs development.
    - Development: 
    - Feature or Bug:

### Configure Branch Protection Rules
| Branch | Name Pattern | Rules |
|---|---|---|
| Development | ```development``` | - Require pull request for merging <br> - Require status checks to pass before merging </br> - Require branch to be up to date before merging </br> - Include administrators |
| Deployment | ```deployment``` | - Require pull request for merging </br> - Require status checks to pass before merging </br> - Require branch to be up to date before merging </br> - Include administrators |
| Team Development | ```<team>-development``` | - Require pull request for merging </br> - Require status checks to pass before merging </br> - Require branch to be up to date before merging </br> - Include administrators </br> - Restrict who can push to matching branches |
| Team Feature or Bug | ```<team>/**/*``` | - Restrict who can push to matching branches |


> **Good Practice:** Set up a Template Repository. If you have a microservice architecture with multiple repositories, you can create a template repo for setting up a back-end service. 
Set up issue templates
Creating Issues

</br>

## Creating Issue Templates

</br>

## Configuration of DevOps

