import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connection = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to the DB");
  } catch (error) {
    logger.error("Could not connect to the DB due to", error);
    process.exit(1);
  }
};

export default connection;
