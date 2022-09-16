import React, { useState, useContext } from "react";
import { Label, TextInput, Button, Toast, Navbar } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Cursor from "../image/Cursor.gif"
import Logo from "../image/Logo.png"

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
  }

  return (
    <div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/just-waves.png')] min-h-screen">
      <Navbar.Brand>
        <Link to="/">
            <img
                src={Logo}
                className="mr-3 h-6 sm:h-20 rounded-lg m-4"
                alt="Wanderlust Logo" />
        </Link>
      </Navbar.Brand>
      <div className="flex items-center justify-center scale-100 p-5">
        <img className="rounded-lg border-4 border-black" src={Cursor} alt="logo" />
      </div>
      <div className="p-5 mx-20 my-4 border-2 border-black bg-white">
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
      {error ? (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          </div>
          <div className="ml-3 text-sm font-normal">
            {error}
          </div>
          <Toast.Toggle />
        </Toast>
      ) : null}
    </div>
  );
}

export default Login