## TPA-005 (Back End Web Dev)
-------------------------------------------------------------------------------------------------------------------------------------------------------
### How To Run
- npm init --y
- npm install
- npm start

### Library
- Node JS
- Express JS          
- Sequelize
- Sequelize-Cli
- MySql2
- Nodemon
- Bcrypt
- JWT (JSON Web Token)
- Body-Parser         
- Dotenv
-------------------------------------------------------------------------------------------------------------------------------------------------------
### End Point
#### User

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>/register</code></summary>

##### Req-Body

> | name      | email     |  password        |                                                                              |
> |-----------|-----------|------------------|------------------------------------------------------------------------------|
> | string    | string    | string           |                                                                              |


##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `Akun berhasil dibuat!`           | `{name:newUser.name,email:newUser.email}`                           |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
</details>

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>/login</code></summary>

##### Req-Body

> | email     | password        |                                                                                           |
> |-----------|-----------------|-------------------------------------------------------------------------------------------|
> | string    | string          |                                                                                           |


##### Responses
  
> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `Akun berhasil dibuat!`           | `{name:newUser.name,email:newUser.email}`                           |
> | `401`         | `Email atau Password Salah!`      | `{token:iajdasneqkwnejqwhejbqbsknsksad}`                            |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
</details>
 
#### Tasks

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>/users/:userId/tasks</code></summary>

##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         |                                   | `{ user-tasks }`                                                    |
> | `401`         | `Unauthorized`                    |                                                                     |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
----------------------------------------------------------------------------------------------------------------------------|
</details>

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>/users/:userId/tasks/:tasksId</code></summary>

##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         |                                   | `{ user-task }`                                                     |
> | `401`         | `Unauthorized`                    |                                                                     |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
----------------------------------------------------------------------------------------------------------------------------|
</details>

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>/users/:userId/tasks</code></summary>

##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         |                                   | `{ user-new-tas}`                                                   |
> | `401`         | `Unauthorized`                    |                                                                     |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
----------------------------------------------------------------------------------------------------------------------------|
</details>

<details>
 <summary><code>PUT</code> <code><b>/</b></code> <code>/users/:userId/tasks/:tasksId</code></summary>

##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `Task Selesai`                    |                                                                     |
> | `401`         | `Unauthorized`                    |                                                                     |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
----------------------------------------------------------------------------------------------------------------------------|
</details>

<details>
 <summary><code>DELETE</code> <code><b>/</b></code> <code>/users/:userId/tasks/:tasksId</code></summary>

##### Responses

> | http code     | message                           | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `Task Berhasil Dihapus`           |                                                                     |
> | `401`         | `Unauthorized`                    |                                                                     |
> | `500`         | `Terjadi Kesalahan Server`        |                                                                     |
----------------------------------------------------------------------------------------------------------------------------|
</details>
