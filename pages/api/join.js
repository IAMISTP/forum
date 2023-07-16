import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    if (request.body.id === "" || request.body.password === "") {
      response
        .status(500)
        .json({ message: "아이디와 비밀번호를 확인해주세요" });
    } else {
      let result = await db
        .collection("userinfo")
        .findOne({ id: request.body.id });
      if (result === null) {
        try {
          await db.collection("userinfo").insertOne(request.body);
          response.redirect(302, "/list");
        } catch (error) {
          console.log(error);
        }
      } else {
        response.status(500).json({
          message: "중복된 아이디 있음",
        });
      }
    }
  }
}
