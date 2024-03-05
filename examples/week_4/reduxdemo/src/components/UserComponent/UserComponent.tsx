import React from "react";
import { useSelector } from "react-redux";

function UserComponent() {
  let user = useSelector((state: any) => state.user);
  return <>{user.username && <h2>{user.username}</h2>}</>;
}

export default UserComponent;
