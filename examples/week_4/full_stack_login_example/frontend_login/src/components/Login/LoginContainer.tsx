import React, { useEffect, useState } from "react";
import LoginInput from "./LoginInput";
import AccountDetailView from "../Account/AccountDetailView";
import axios from "axios";
import AccountContainer from "../Account/AccountContainer";

const URL = `http://localhost:4000`;

function LoginContainer() {
  const [user, setUser] = useState({} as any);

  async function updateUser(user: any) {
    try {
      let response: any = await getUser(user);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUser(user: any) {
    try {
      let response = await axios.post(`${URL}/user`, {
        username: user.username,
        password: user.password,
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <LoginInput updateUser={updateUser}/>
      <AccountContainer user={user}/>
    </>
  );
}

export default LoginContainer;
