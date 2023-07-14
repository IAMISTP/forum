import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((x, i) => {
        return (
          <Link href={`/detail/${result[i]._id}`}>
            <div className="list-item" key={i}>
              <h4>{result[i].title}</h4>
              <p>{result[i].content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
