import mongoose from "mongoose";
import config from "config";

async function connection() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to the DB");
  } catch (error) {
    console.error("Could not connect to the DB due to", error);
    process.exit(1);
  }
}

export default connection;
