export default function Join() {
  return (
    <div>
      <h2>회원가입</h2>
      <form method="post" action="/api/join">
        <div>
          id:
          <input name="id" />
        </div>
        <div>
          password:
          <input name="password" />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
