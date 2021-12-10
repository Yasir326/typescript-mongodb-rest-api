import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};

export default createUser;
