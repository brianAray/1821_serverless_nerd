import axios from "axios";
import React, { useState } from "react";
import ConfirmComponent from "../Confirm/ConfirmComponent";

function RegistrationComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const [isConfirming, setIsConfirming] = useState(false);

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:4000/user", {
        username,
        password,
        email,
      });
      console.log(response.data);
      setIsConfirming(true);
    } catch (error) {
      console.error("error registering user", error);
    }
  };

  const confirmUser = async () => {
    try {
      const response = await axios.post("http://localhost:4000/confirm", {username, confirmationCode});
      console.log(response.data);
      setIsConfirming(false);
    } catch (error) {
      console.error("error confirming user", error);
    }
  };

  return (
    <div>
      {!isConfirming ? (
        <>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={registerUser}>Register</button>
        </>
      ) : (
        <>
          <ConfirmComponent
            setConfirmationCode={setConfirmationCode}
            confirmUser={confirmUser}
          />
        </>
      )}
    </div>
  );
}

export default RegistrationComponent;
