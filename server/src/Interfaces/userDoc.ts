import { Types } from "mongoose";

export interface UserDoc extends Document {
  _id: Types.ObjectId
  name: string;
  email: string;
  password: string;
  matchPassword: (pw: string) => Promise<boolean>;
}
