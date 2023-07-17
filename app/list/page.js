import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./listItem";

export const dynamin = "force-dynamic";
export const revalidate = 10;
export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      <ListItem result={result} />;
    </div>
  );
}
