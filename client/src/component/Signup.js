import React, { useState } from "react";
import { Label, TextInput, Button, Toast } from "flowbite-react"
import { useNavigate } from "react-router-dom";
import Pen from "../image/Pen.gif"


function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [age, setAge] = useState("");
    const [avatar, setAvatar] = useState("")
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                name,
                password,
                password_confirmation: passwordConfirmation,
                avatar,
                age,
                location

            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(() => navigate("/login"));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div>
            <div className="flex items-center justify-center scale-100 p-5">
                <img src={Pen} alt="logo" />
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
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username..."
                        required={true} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Name" />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name..."
                        value={name}
                        required={true}
                    />
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password_confirmation"
                                value="Confirm Password" />
                        </div>
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            placeholder="Re-enter your password..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="age"
                                value="Age" />
                        </div>
                        <TextInput
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="avatar"
                                value="Avatar" />
                        </div>
                        <TextInput
                            id="avatar"
                            type="url"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            placeholder="Upload your avatar..."
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="location"
                                value="Location" />
                        </div>
                        <TextInput
                            id="location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter your location..."
                            required={true} />
                    </div>
                </div>
                <Button type="submit">
                    {isLoading ? "Loading ..." : "Signup"}
                </Button>
                {errors ? (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            {errors}
                        </div>
                        <Toast.Toggle />
                    </Toast>
                ) : null}
            </form>
            </div>
        </div>
    )

}

export default Signup;