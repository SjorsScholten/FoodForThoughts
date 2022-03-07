# Use Case View

[docs](../info_docs.md) \ [views](./info_views.md) \ use case view

1. Use Case Diagram
2. Use Cases
	1. Account Service
	2. Post Service
	3. Follow Service
	4. React Service

## Use Case Diagram

![UseCase Diagram]()

## Use Cases

### Account Service

---

**Name:** UC01_CreateAccount <br/>
**Description:** As a user i want to create an account <br/>
**Actors:** User

**Pre-condition:**
1. The User must not be authenticated

**Steps:**
1. The User navigates to the account creation page
2. The User fills in the form with login credentials
3. The System will precheck the input fields for faults
4. The User submits the form
5. The System will send a REST call with the data to the account service
6. ...

---
