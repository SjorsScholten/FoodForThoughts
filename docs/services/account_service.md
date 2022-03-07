# Account Service

[docs](../info_docs.md) \ [services](./info_services.md) \ account service

The account service will handle everything involving accounts.

## Actions

- Create, delete, and update accounts
- Retrieve an account or a list of accounts
- Follow accounts

## Data Structure

```json
{
    "account" : {
        "id" : 0,
        "name" : "default name",
        "bio" : "default biography",
    },
    "follow" : {
        "user" : 0,
        "follower" : 0,
        "date" : 0000-00-00
    }
}
```