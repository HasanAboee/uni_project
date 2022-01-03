import { getSession } from "next-auth/client";
import { hashPassword, verifyPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const session = await getSession({ req: req });
  if (!session) {
    
    res.status(401).json({ message: "کاربر تایید نشد" });
    return;
  }
  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    
    res.status(404).json({ message: "کاربر پیدا نشد" });
    client.close();
    return;
  }
  const currentPassword = user.password;

  const passwordAreEquall = await verifyPassword(oldPassword, currentPassword);
  if (!passwordAreEquall) {
    res.status(403).json({ message: "کلمه عبور قدیمی اشتباه است" });
    close.client();
    return;
  }
  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );
  res.status(200).json({ message: "کلمه عبور با موفقیت تغییر کرد" });
  client.close();
}
export default handler;
