# Post Service

[docs](../info_docs.md) \ [services](../info_docs.md#services) \ post service

## Responsibility

The post service is what users make able to view and create posts.

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
        "id" : "0000000-0000-0000-0000-000000000000",
        "account" : "0000000-0000-0000-0000-000000000000",
        "created" : "YYYY-MM-DD::hh::mm::ss",
        "parent" : {
            "id" : "0000000-0000-0000-0000-000000000000",
            "type" : "None"
        },
        "likes" : [],
        "data" : ""
    }
}
```

| Name | Type | Usage |
|---|---|---|
| id | GUID | used to identify the post when searching. |
| account | GUID | used to identify the account that created the post (directly linked to Account.Id). |
| created | DateTime | used to determine when the post was created. |
| parent | Object | used to parent the post to a different entry. the id is used to identify the entry. the type is used to determine the type of the parent [Account, Post]. |
| likes | Array | an array of account IDs that have liked the post.
| content | string | used to hold the information of the post. |
