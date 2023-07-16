import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    let changeData = { title: 요청.body.title, content: 요청.body.content };
    const client = await connectDB;
    const db = client.db("forum");
    try {
      await db.collection("post").updateOne(
        { _id: new ObjectId(요청.body._id) },
        {
          $set: changeData,
        }
      );
      return 응답.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
  return 응답.status(200).json("처리완료123");
}
