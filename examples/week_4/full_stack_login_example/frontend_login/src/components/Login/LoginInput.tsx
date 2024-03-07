import React, { useState } from "react";

function LoginInput(props: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    alert(username + password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default LoginInput;
