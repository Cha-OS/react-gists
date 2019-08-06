**Part 2**

1. I use local MongoDb Server
2. I've changed 

`mongoose
.connect('mongodb+srv://userx:${MONGO_ATLAS_PW}@cluster0-ufv5h.azure.mongodb.net/test?retryWrites=true', { useFindAndModify: false, useNewUrlParser: true })`

to

`mongoose
.connect('mongodb://admin:pass@localhost:27017/test?retryWrites=true', { useFindAndModify: false, useNewUrlParser: true })`

2. I've created a user

`db.createUser(`
  `{`
    `user: "admin",`
    `pwd: "pass",`
    `roles: [  { role: "root", db: "admin" }]`
  `}`
`)`

2. I've commented the following code in **server.js**

   `db.grantRolesToUser("admin", ["readWrite", { role: "read", db: "test" }], {w: "majority", wtimeout: 4000});`
   because I've done this through a MongoDb client (command prompt) and changed DB to 'test' instead of 'stock':`

3. You need to start the server with
   `sudo mongod --auth`

4. 