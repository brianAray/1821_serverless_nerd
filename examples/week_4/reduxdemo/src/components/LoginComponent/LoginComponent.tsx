import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";

function LoginComponent() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  let dispatcher = useDispatch();

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatcher(userActions.setUser(state));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        onChange={(event: any) =>
          setState({ ...state, username: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event: any) =>
          setState({ ...state, password: event.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginComponent;
