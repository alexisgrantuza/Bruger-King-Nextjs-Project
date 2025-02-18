import mongoose, { Document, Model, Schema } from "mongoose";

const usersInfoSchema: Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    streetAdress: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },

    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const UsersInfo: Model<Document> =
  mongoose.models.UsersInfo || mongoose.model("UsersInfo", usersInfoSchema);
