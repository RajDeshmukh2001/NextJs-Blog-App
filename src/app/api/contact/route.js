import Contact from "@/models/Contact";
import conn from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    const newContact = new Contact(body);

    try {
        await conn();
        await newContact.save();
        return new NextResponse('Message sent successfully', {status: 201});
    } catch (error) {
        return new NextResponse(error, {status: 500});
    }
}