# Post Service

[docs](../info_docs.md) \ [services](../info_docs.md#services) \ post service

## Responsibility

A post is a content holder for text. examples of usages can be standalone posts, comments on posts, or comments on accounts. 

## Actions

- Create, delete, and update posts.
- Retrieve a post or a list of posts.

## Interfaces

| Name | Method | Endpoint | Task |
|---|---|---|---|
| GetPosts | GET | /posts | Returns a list of all followers of the requested id |
| GetPostByID | GET | /posts/\<id\> | Returns a post of the requested id |
| CreatePost | POST | /post | Creates a new post with the attached data |
| UpdatePost | PUT | /post/\<id\> | Updates the post with the requested id |
| RemovePost | DELETE | /post | Removes a post |

## Data Structure

```json
{
    "post" : {
        "id" : 0,
        "account" : 0,
        "created" : "YYYY-MM-DD::hh::mm::ss",
        "parent" : {
            "id" : 0,
            "type" : "None"
        },
        "likes" : [],
        "data" : ""
    }
}
```

| Name | Type | Usage |
|---|---|---|
| id | GUID | used to identify the post when searching |
| account | GUID | used to identify the account that created the post (directly linked to Account.Id) |
| content | string | used to hold the information of the post |