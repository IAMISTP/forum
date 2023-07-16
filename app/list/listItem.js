"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";
import { useRouter } from "next/navigation";

export default function ListItem({ result }) {
  const router = useRouter();
  return (
    <div>
      {result.map((x, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>{" "}
            </Link>
            <p>{result[i].content}</p>
            <Link href={`/edit/${result[i]._id}`}>✏️</Link>
            <span
              onClick={() => {
                fetch("api/post/delete", {
                  method: "DELETE",
                  body: result[i]._id,
                })
                  .then((r) => {
                    return r.json();
                  })
                  .then((r) => {
                    console.log(r);
                    router.refresh();
                  });
              }}
            >
              🗑️
            </span>
            <DetailLink>메인페이지 이동</DetailLink>
          </div>
        );
      })}
    </div>
  );
}
