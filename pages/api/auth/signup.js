import { hashPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";
async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({ message: "کلمه عبور حداقل باید شامل 7 کارکتر باشد!" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();
  const existingUSer = await db.collection("users").findOne({ email: email });
  if (existingUSer) {
    
    res.status(422).json({ message: "قبلا با این ایمیل حساب ایجاد شده است" });
    client.close();
    return;
  }
  const hashedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });
 
  res.status(201).json({ message: "حساب ایجاد شد" });
  client.close();
}

export default handler;
