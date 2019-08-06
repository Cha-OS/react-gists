const mongoose = require("mongoose");
const fastify = require("fastify")();
const routes = require("./routes");
const path = require("path");
const {
  parsed: { MONGO_ATLAS_PW }
} = require("dotenv").config();

//connect to mongodb atlas
mongoose
  // .connect(
  //   `mongodb+srv://userx:${MONGO_ATLAS_PW}@cluster0-ufv5h.azure.mongodb.net/test?retryWrites=true`,
  //   { useFindAndModify: false, useNewUrlParser: true }
  // )
  // I've changed the connection to local DB and db 'test', and user I've created
  .connect(`mongodb://admin:pass@localhost:27017/test?retryWrites=true`, {
    useFindAndModify: false,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(e => console.log("MongoDB could not be connected due to ", e));

//handles GET / request
fastify.get("/", async (request, reply) => {
  try {
    reply.sendFile("index.html");
  } catch (e) {
    console.log(e);
  }
});

//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route));

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3000, "0.0.0.0", err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`);
});

//NOTE!!!! I've done this through a MongoDb client (command prompt) and changed DB to 'test' instead of 'stock':
// db.grantRolesToUser("admin", ["readWrite", { role: "read", db: "test" }], {
//   w: "majority",
//   wtimeout: 4000
// });

const DistPath = path.join(__dirname, "..", "dist");
fastify.register(require("fastify-static"), {
  root: DistPath
});
