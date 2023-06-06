import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { connect } from "@/utils/db";

export const GET = async (request, { params }) => {
  //fetch
  try {
    await connect();
    const post = await Post.findById(params.id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("DataBase Error", { status: 500 });
  }
};
