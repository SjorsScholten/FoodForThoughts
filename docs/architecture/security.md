# Security View

## Design

### Risk Analysis



### OWASP



### Authentication

Authentication is the process of verifying who a user is.

### Authorization

Authorizations is the process of verifying what a user has access to. In the design phase we determine what is accessible to what group, which is often done through roles. Not everyone should have access to all the data or processes.

## Development

- Using the latest libraries to avoid security vulnerabilities
- Using HTTPS and SSL certificates
- Using SonarCloud for code analysis (CI/CD)

## Deployment

- Only open the ports you need
- Using Cloudflare to protect your system from DDoS attacks
- Setting up a firewall
- Penetration Testing

## Monitoring

- Logging
- Health check