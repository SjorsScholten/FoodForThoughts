# Entry Service

[docs](../info_docs.md) \ [services](./info_services.md) \ entry service

The entry service is there to link entries to one another. An entry is a certain item that has linkage to other items.

examples of entries are:

- An Account could link to another account in a form of sub accounts.
- A Post could link to an account or post in order for them to have comments.

## Actions

- Create, delete, and update entries
- Retrieve an entry or a list of entries

## Data Structure

```json
{
    "Entry": {
        "id" : 0,
        "parent" : 0,
        "type" : "Account | Post",
        "status" : "Published | Draft | Suspended"
    }
}
```