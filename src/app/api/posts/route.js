import { NextResponse } from "next/server";
import conn from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    try {
        await conn();
        const posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (error) {
        return new NextResponse('Database Error', {status: 500});
    }
};

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Post(body);

    try {
        await conn();
        await newPost.save();
        return new NextResponse("Post has been created", {status: 201});
    } catch (error) {
        return new NextResponse(error, {status: 500});
    }
};