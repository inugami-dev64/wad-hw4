# Homework 4 backend

This directory contains source code for the backend part of the homework. 
Since the project is quite simple it only has two models to work with: `Post` and `User` models.

## Error handling

Whenever an API requests fails with an error, the server responds with a status code `400` along with a descriptive error body.
The body looks like this:
```json
{
    "httpCode": 400,
    "code": "<error-code>",
    "msg": "<error-message"
}
```

Errors are defined in server's `error.js` file and they can be any of the following:
* 0 - `success`
* 1 - `not found`
* 2 - `not authorized`
* 3 - `persistence error`

## Post CRUD API

Post CRUD API provides CRUD functionality for posts. It's pretty straight forward. The main entity that we is the `Post` class from `models.js`.

An example json representation looks something like this:
```json
{
    "id": 1,
    "userId": 1,
    "body": "Lorem ipsum...",
    "likesCount": 69,
    "editedAt": "2024-12-17T13:26:54.689Z",
    "createdAt": "2024-12-17T13:26:54.689Z"
}
```

### Creating a new post

Example request json:
```json
{
    "userId": 1,
    "body": "Lorem ipsum..."
}
```

Possible errors: `not authorized`, `persistence error`

### Reading posts

#### All posts

Example request:
```
GET /api/v1/posts
```

Possible errors: none

#### By ID

Example request:
```
GET /api/v1/posts/:id
```

where `:id` represents the ID of the post to GET.

Possible errors: `not found`

### Updating a post

Example request:
```json
PATCH /api/v1/posts/:id
```
where `:id` represents the ID of the post to update.

Example request body:
```json
{
    "body": "Some new body",
    "likesCount": 12
}
```

Possible errors: `not found`, `not authorized`

### Deleting posts

#### Deleting a single post

Example request:
```
DELETE /api/v1/posts/:id
```
where `:id` represents the ID of the post to delete.

Possible errors: `not found`, `not authorized`

#### Deleting all posts

Example request:
```
DELETE /api/v1/posts
```

Possible errors: `not authorized`, `persistence error`