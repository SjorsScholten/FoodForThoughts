# Entry Service

[docs](../info_docs.md) \ [services](../info_docs.md#services) \ entry service

#### Table of content
1. [Actions](#actions)
2. [Interfaces](#interfaces)

## Responsibility

The entry service is there to link entries to one another. An entry is a certain item that has linkage to other items.

examples of entries are:

- An Account could link to another account in a form of sub accounts.
- A Post could link to an account or post in order for them to have comments.

## Actions

- Create, delete, and update entries
- Retrieve an entry or a list of entries

## Interfaces

| Name | Method | Endpoint | Task |
|---|---|---|---|
| GetEntries | GET | /entries | Returns a list of all entries |
| GetEntryByID | GET | /\<id\> | Returns an entry of the requested id |
| CreateEntry | POST | /entries | Creates a new entry with the attached data, and returns the id of the created entry |
| UpdateEntry | PUT | /entries | Updates the data of an entry |
| RemoveEntry | DELETE | /entries | Removes an entry |

## Data Structure

```json
{
    "Entry": {
        "id" : 0,
        "type" : ["None", "Account", "Post"],
        "parent" : 0,
        "linkedType" : ["None", "Account", "Post"],
        "status" : ["None", "Published", "Draft", "Suspended"]
    }
}
```

| Name | Type | Usage |
|---|---|---|
| id | GUID | Used to identify the entry, a reference to either Account.Id or Post.Id |
| type | enum (int) | Used to define the type of entry |
| parent | GUID | Used to identify the linked entry, a reference to either Account.Id or Post.Id |
| linkedType | enum (int) | Used to define the type of linked entry |
| status | enum (int) | *\*optional*, Used to define a state of the entry when handling requests |