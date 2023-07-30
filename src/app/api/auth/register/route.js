import User from "@/models/User";
import conn from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    const {name, email, password} = await req.json();

    await conn();
    const hashPassword = await bcrypt.hash(password, 5)
    const newUser = new User({ name, email, password: hashPassword });

    try {
        await newUser.save();
        return new NextResponse("Registration Successfull", { status: 201 });
    } catch (err) {
        return new NextResponse(err.message, { status: 500 });
    }
}