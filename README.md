# HNG Stage Two Task

## Problem Statement

You are to build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name. Accompany the development with UML diagrams to represent your system's design and database structure. Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.

## Solution Implementation

- **Stack Used**
  - Expressjs: This was used to write the server code in combination with third part libaries like cors, nodemon e.t. c.
  - Node js: This is the main platformm on which the application is built.
  - MongoDb: noSQL database

* **Database**

  - The mongodb noSQL database was used for this project.

* **UML Diagram**

  - Link[https://lucid.app/lucidchart/aaa14333-3d0f-41b1-be2d-5b381f8e5f01/edit?viewport_loc=-895%2C-482%2C4110%2C1962%2C0_0&invitationId=inv_98ad4374-9e92-4fe7-b72a-8ea1fde73870]

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/samsonOdunola/HNG_backend_stage_two.git
```

2. Navigate to the project directory.

```bash
cd HNG_backend_stage_two
```

3. Install the required dependencies.

```bash
npm install
```

4. Configure your database connection by editing the `config.js` file to match your database credentials.

5. Start the server.

```bash
npm run dev
```
