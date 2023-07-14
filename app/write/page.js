export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <div>
          <span>제목</span>
          <input name="title" />
        </div>
        <div>
          <span>글내용</span>
          <input name="content" />
        </div>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
