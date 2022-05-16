# Scenarios

Food-for-Thoughts (FFT) is a social media platform where users can express their thoughts in small posts.

Scenarios are described for each phase in the SDLC: Design, Development, Testing, and Deployment.

<br>

# Software Quality and Assurance

How can you assure the quality of a software system in all phases of the SDLC?

## Design
- The designer wants the architecture diagrams to stay up to date. So, everyone can stay on one line during development.

## Development
- The developer wants to know if a change to the code base contains any bugs or code smells. So, he can fix them as soon as possible and keep the code base secure and clean.

## Testing
- A Tester wants to use acceptance testing to see weather a given functionality has been implemented correctly.

## Monitoring
- The operator wants to monitor the status of the application. When an application fails to launch, he wants to know why the application does not launch and create an issue with the development team.

<br>

# Security by design

How do you work towards a secure system in all phases of the SDLC?

## Design
- The designer wants a user to require authorization before creating posts or updating his account. So, not just anyone can create posts or update the account of any user.
- The designer wants to avoid common security exploits

## Development
- ...

## Testing
- The tester wants to know whether a certain function or component can be exploited.

## Monitoring
- The operator wants to monitor the activity for the application. When a malicious threat happens on the application, the operator can react by blocking off this threat.

<br>

# Distributed data

## Design
- The designer wants the data to comply to data protection laws such as GDPR.
- The designer wants the data layer to scale. So, the application can deal with a lot of requests.

## Development
- ...

## Testing
- The tester wants to test the scalability of the data in a test environment. So, he can see whether the data is scaled and synchronized correctly.

## Monitoring
- The operator wants to monitor the activity of the data layer. When there is a problem with scaling, he needs to solve the problem as soon as possible.

<br>

# Cloud services

## Design
- The designer wants the application to be scalable. So, the application can deal with heavy loads.

## Development
- The developer wants to host their code base in the cloud. This way the whole team can get access from one point.
- The developer wants to know when a change to the code base does not build, so they can fix the problem as soon as possible.

## Testing
- The tester wants the tests to automatically run when someone makes a change to the code base. When a test fails they want to notify the team that the current change does not meet the requirements.
- The tester wants to test the scalability of the application in a test environment. So, he can see whether the application scales correctly.

## Monitoring
- The operator wants the application to automatically deploy to the web when all tests are correct. So, the users will always get the latest build and features.