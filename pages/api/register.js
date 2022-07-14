import User from "../../models/user";

import connectDB from "../../utils/connectDB";
export default async function handler(req, res) {
  await connectDB();
  const data = req.body
  const name = data.name;
  const email = data.email;
  const password = data.password;

  //console.log(req.body)

  const newUser = new User({
    name:name,
    email: email,
    password: password,
  });
  console.log("\n\n\n\n\n\n\n\n\n")
  const checkEmail = await User.findOne({ email: email });
  console.log(checkEmail)
  console.log("here")
  if (checkEmail) return res.status(400).json({message:"Email already exists"});
  const checkName = await User.findOne({ name: name });
  if (checkName) return res.status(400).json({message:"Name already exists"});
  try {
    const saved = await newUser.save();
    //console.log(savedUser)
    res.send({ user: saved.name, user: saved.email });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
