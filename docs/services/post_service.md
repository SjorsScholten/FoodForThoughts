# Post Service

[docs](../info_docs.md) \ [services](./info_services.md) \ post service

## Responsibility



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
        "content" : ""
    }
}
```