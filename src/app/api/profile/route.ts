import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";
import { UsersInfo } from "@/models/UsersInfo";
import { getServerSession } from "next-auth";
import { handler } from "../auth/[...nextauth]/route";

export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const session = await getServerSession(handler);

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    console.log("Session Data:", session);
    console.log("Received Data:", data);

    return new Response(JSON.stringify({ message: "Profile updated" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
