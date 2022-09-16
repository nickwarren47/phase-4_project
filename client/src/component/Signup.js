import React, { useState } from "react";
import { Label, TextInput, Button, Toast, Navbar } from "flowbite-react"
import { useNavigate, Link } from "react-router-dom";
import Pen from "../image/Pen.gif"
import Logo from "../image/Logo.png"

function Signup() {
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
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(() => navigate("/login"));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
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
                <img className="rounded-lg border-4 border-black" src={Pen} alt="logo" />
            </div>
            <div className="p-5 mx-20 my-4 mb-0 border-2 border-black bg-white ">
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