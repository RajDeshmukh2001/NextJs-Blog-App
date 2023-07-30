import User from "@/models/User";
import conn from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials){
        await conn();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const verifyPassword = await bcrypt.compare(credentials.password, user.password);

            if (verifyPassword) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }

          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }),
  ],
});

export { handler as GET, handler as POST };