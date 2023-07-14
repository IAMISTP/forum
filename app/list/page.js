import { connectDB } from "@/util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((x, i) => {
        return (
          <div className="list-item">
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
