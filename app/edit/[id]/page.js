import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>글수정</h4>
      <form action="/api/post/edit" method="POST">
        <div>
          <span>제목</span>
          <input name="title" defaultValue={result.title} />
        </div>
        <div>
          <span>글내용</span>
          <input name="content" defaultValue={result.content} />
          <input
            style={{ display: "none " }}
            name="_id"
            defaultValue={result._id}
          />
        </div>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
