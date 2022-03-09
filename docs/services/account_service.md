# Account Service

[docs](../info_docs.md) \ [services](../info_docs.md#services) \ account service

## Responsibility

The account service will handle everything involving accounts.

## Actions

- Create, delete, and update accounts
- Retrieve an account or a list of accounts
- Follow and unfollow accounts
- Retrieve a list of followers

## Interfaces

### Account

| Name | Method | Endpoint | Task |
|---|---|---|---|
| GetAccounts | GET | /accounts | Returns a list of all accounts |
| GetAccountByID | GET | /accounts/\<id\> | Returns an account of the requested id |
| CreateAccount | POST | /account | Creates a new account with the attached data, and returns the id of the created account |
| UpdateAccount | PUT | /account/\<id\> | Updates the data of an account |
| RemoveAccount | DELETE | /account | Removes an account |

### Follow

| Name | Method | Endpoint | Task |
|---|---|---|---|
| GetFollowers | GET | /accounts/\<id\>/followers | Returns a list of all followers of the requested id |
| AddFollow | POST | /account/follow | Adds a new follow with the attached data |
| RemoveFollow | DELETE | /account/follow | Removes a follow |

## Data Structure

```json
{
    "account" : {
        "id" : 0,
        "created" : 0000-00-00,
        "role" : ["Member", "Moderator", "Administrator"],
        "name" : "default name",
        "bio" : "default biography",
    }
}
```

```json
{
    "follow" : {
        "user" : 0,
        "follower" : 0,
        "initiated" : 0000-00-00
    }
}
```