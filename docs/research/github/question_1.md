# How can we use GitHub to manage long term projects?

## Using GitHub Organizations and Teams
https://docs.github.com/en/organizations 
https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams 

An organization allows GitHub users to collaborate on projects. One of the benefits of GitHub Organizations is that you can transfer the ownership of the assigned repos.

In an organization you can create different teams. For each team you can specify the access to repositories.

</br>

## Using GitHub Repositories
branches
- development
- deployment
- team

</br>

## Using GitHub Actions for CI/CD
https://docs.github.com/en/actions 
https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration
https://docs.github.com/en/actions/deployment/about-deployments/about-continuous-deployment 

### Publishing Docker Images
https://docs.github.com/en/actions/publishing-packages/publishing-docker-images 

</br>

## Using GitHub submodules
https://github.blog/2016-02-01-working-with-submodules/ 
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-an-issues-only-repository 

GitHub submodules allow you to create dependencies between repositories. for example, you can add a library as a submodule to a repository to use it in your project.

You can use submodules to organize all your repositories in one master-repository. This is especially useful for microservices where the services are spread over multiple repositories. A developer can clone all the repositories by cloning this one master repo using the following command:

```bash
git clone --recursive https://github.com/<organisation>/<master-repo>.git
```

You can add submodules to an existing repo with the following command:

```bash
git submodule add https://github.com/<organisation>/<repository>.git <name>
```

you can update all the submodules in the repository by using the following command:

```bash
git submodule update --init --recursive
```

### benefits of using master repo
- When you have a microservice architecture with a codebase over multiple repositories, with a master repo you could have all your services in one location. - By cloning the master repos with the ‘--recursive’ tag you can pull all the services at once, instead of having to do them one-by-one manually. 
- With the master repo, you can collect all issues in one repository.
- If you are using bash or shell scripts that are dependent on multiple repos, for example to launch the application locally, you could reference all those repos from within the master repository. A developer does not need to change the locations within the files.
- wiki and documentation in one location

</br>

## Using GitHub Projects
https://docs.github.com/en/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards 

GitHub projects is a tool to manage issues for a team/project/organization. It shows all issues assigned to the project in a kanban style board. It is an automated process, so it automatically moves the issues between columns depending on its status.

When a team is assigned to the project, you can automatically assign a reviewer to a pull request when one is made for an issue on the board.

> GitHub Projects are not a replacement for the scrum process.

GitHub does not support various functions like: sprints and story points. You could on the other hand use GitHub integration in an Agile tool like Azure or Jira.

</br>