# API Documentation

## Introduction

Welcome to the documentation for the **Your API Name**. This API performs CRUD operations .

## Base URL

The base URL for all API endpoints is:localhost:3000/api

## Making Requests

The following below shows an exapmle on the operations that can be performmed on this API and how to perform operations.

1. **Create a new Resource**

   - EndPoint: "/"

   - HTTP Method: **POST**

   - Description: Create a new Resource.

   - Query Parameters:
     - "name": (required) Specifies the name of the resource to create.

   **Sample Response**

   ```JSON
   {
   "name": "SAMPLE_NAME",
   "_id": "64fee36c0accda750f8d61ce",
   "__v": 0
   }
   ```

   **Limitations**
   The name parameter is a unique identifier so passing in a duplicate name will return an error.

2. **Get a Resource**

   - EndPoint: "/"

   - HTTP Method: **GET**

   - Description: Gets a speccific resource.

   - Query Parameters:
     - "name": (required) Specifies the name of the resource to retrieve.

   **Sample Response**

   ```JSON
   {
   "_id": "64fee36c0accda750f8d61ce",
   "name": "SAMPLE_NAME",
   "__v": 0
   }
   ```

3. **Update a Resource**

   - Endpoint:"/{user_id}"

   * Content-Type: application/json

   * HTTP Method: "PUT"

   * Description: Update a parameter in a resource

   * Path Parameters:

     - "user_id" : (required) Specifies the ID of the resource to update

   * body:
     ```JSON
     {
        "name":"NEW_NAME"
     }
     ```

   **Sample Response:**

   ```JSON
   {
   "_id": "64fe300261081ce592704cbe",
    "name": "NEW_NAME",
    "__v": 0
   }

   ```

4. **Delete a Resource**

   - Endpoint:"/"

   * HTTP Method: "DELETE"

   * Description: Delete's a specific resource

   * Query Parameters:

     - "name" : (required) Specifies the name of the the resource to be deleted

   **Sample Response:**

   ```JSON
   {
    "users_deleted": 1
   }
   ```

## Error Handling

In case of an error, the API will respond with an appropriate HTTP status code and a JSON response body containing an `error` field with a description of the error.

- Example error response:

  ```json
  {
    "error": "Invalid API key"
  }
  ```
