# API Documentation

## Introduction

Welcome to the documentation for the **HNG CRUD API**. This API performs CRUD operations .

## Base URL

The base URL for all API endpoints is: API[https://my-task-two.onrender.com/api]

## UML Diagram

Link [https://lucid.app/lucidchart/aaa14333-3d0f-41b1-be2d-5b381f8e5f01/edit?viewport_loc=-895%2C-482%2C4110%2C1962%2C0_0&invitationId=inv_98ad4374-9e92-4fe7-b72a-8ea1fde73870]

## Making Requests

The following below shows an exapmle on the operations that can be performmed on this API and how to perform operations.

1. **Create a new Resource**

   - EndPoint: "/"

   - HTTP Method: **POST**

   - Description: Create a new Resource.

   * **Sample Request**

     -URL: "https://my-task-two.onrender.com/api"

     - body:

       ```JSON
       {
           "name":"NAME"
       }
       ```

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

   - EndPoint: "/{user_id}"

   - HTTP Method: **GET**

   - Description: Gets a speccific resource.

   * Path Parameters:

     - "user_id" : (required) Specifies the ID of the resource to retrieve

   * **Sample Request**

     -URL: "https://my-task-two.onrender.com/api/:user_id"

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

   * **Sample Request**

     - URL: "https://my-task-two.onrender.com/api/:user_id"

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

   - Endpoint:"/{user_id}"

   * HTTP Method: "DELETE"

   * Description: Delete's a specific resource

   * Path Parameters:

     - "user_id" : (required) Specifies the ID of the resource to delete

   * **Sample Request**
     - URL: "https://my-task-two.onrender.com/api/:user_id"

   **Sample Response:**

   ```JSON
   {
    "_id": "650085fd05ccdc7719b311e8",
    "name": "John Mary",
    "__v": 0
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
