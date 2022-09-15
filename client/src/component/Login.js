import React, { useState, useContext } from "react";
import { Label, TextInput, Button } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import Cursor from "../image/Cursor.gif"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);
  const [error, setError] = useState("")

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    auth.signin(username, password)
      .then((data) => {
        if (data.error) {
          setError(data.error)
        }
        else {
          navigate(from, { replace: true });
        }
      })
      .catch()
  }

  return (
    <div>
      <div className="flex items-center justify-center scale-100 p-5">
        <img src={Cursor} alt="logo" />
      </div>
      <div className="p-5 mx-20 my-20 border-2 border-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username" />
          </div>
          <TextInput
            id="email1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username..."
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."
            value={password}
            required={true}
          />
        </div>
        <Button type="submit">
          Login
        </Button>
      </form>
      </div>
    </div>
  );
}

export default Login