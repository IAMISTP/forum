import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    if (요청.body.title === "") {
      return 응답.status(500).json("제목 미기입");
    }
    try {
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.status(200).redirect("/list");
    } catch (error) {
      console.log(error);
    }
  }
  return 응답.status(200).json("처리완료123");
}
