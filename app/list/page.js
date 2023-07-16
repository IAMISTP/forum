import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((x, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>{" "}
            </Link>
            <Link href={`/edit/${result[i]._id}`}>✏️</Link>
            <p>{result[i].content}</p>
            <DetailLink>메인페이지 이동</DetailLink>
          </div>
        );
      })}
    </div>
  );
}
