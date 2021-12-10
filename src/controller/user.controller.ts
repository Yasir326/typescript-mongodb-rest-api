import { Request, Response } from "express";
import createUser from "../service/user.service";
import logger from "../utils/logger";

const createHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(user)
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};

export default createHandler;
