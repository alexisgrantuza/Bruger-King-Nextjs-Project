// types/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
