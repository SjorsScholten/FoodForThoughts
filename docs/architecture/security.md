# Security View

## Risk analysis

- create a risk assessment
- create a risk management plan
- implement the risk management plan
- monitor the risks

## Authentication

Authentication is the process of verifying who a user is.

## Authorization

Authorizations is the process of verifying what a user has access to. In the design phase we determine what is accessible to what group, which is often done through roles. Not everyone should have access to all the data or processes.

## Code Analysis

- Using SonarCloud for code analysis (CI/CD)

## Deployment

- Only open the ports you need
- Using Cloudflare to protect your system from DDoS attacks
- Setting up a firewall
- Penetration Testing

## Monitoring

- Logging
- Health check

## Data

Personal data should comply with GDPR. This will mostly apply to account details such as date of birth and contact information. As a developer you should know who stores your data and if they are compliant with GDPR. Most big companies like google and microsoft are compliant to these regulations.

For our application we want to host it on azure. Our database is hosted on MongoDB cloud, which uses azure servers to host your database. You as the developer can choose where the server is located.