import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react"

function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => r.json())
        .then((user) => {
            onLogin(user)
            setUsername("")
            setPassword("")
    })
    }
  
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username"/>
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
              value="Password"/>
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
    );
  }

  export default Login