import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    photo: string;
    planId: string;
    creditBalance: number;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    userName: { type: String, required: true, unique: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
    planId: { type: String, required: true, default: 1 },
    creditBalance: { type: Number, required: true, default: 10 }
});

const User = models?.User || model("User", UserSchema);

export default User;