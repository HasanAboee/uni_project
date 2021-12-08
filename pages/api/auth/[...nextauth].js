import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";
export default NextAuth({
    session:{
        jwt:true
    },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        if (!user) {
           
          throw new Error("حساب با این ایمیل پیدا نشد");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          
          throw new Error("کلمه عبور اشتباه است!");
        }
       
        return { email: user.email };
       
      },
    }),
  ],
});
