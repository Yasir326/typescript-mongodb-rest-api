import express from "express";
import config from "config";
import connection from "./utils/connection";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
  console.log("Listening on port: ", port);

  await connection();
});
