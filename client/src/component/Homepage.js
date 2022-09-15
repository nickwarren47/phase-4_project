
import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"



function Homepage() {

    const { user } = useContext(AuthContext);

    return (
        <div id='hompage'>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/189964202-fef8374d-3e12-4b80-a381-4323525f8ba7.jpg)] h-400 w-full bg-cover bg-center p-20'>
                <div className="flex items-center justify-center scale-125 p-5">
                    <img src="https://user-images.githubusercontent.com/106715328/188249403-12a9040b-64c2-4069-a05a-21fa8e9a1f6b.png" alt="logo" />
                </div>
                <h1 className='text-sky-500 text-7xl font-bold mt-12 text-center p-5'>Welcome to Wanderlust!</h1>
                <h2 className="text-sky-500 text-4xl font-light mt-5 text-center"> Your place to find a place</h2>
                <div className="flex items-center justify-center mt-7 space-x-7">
                    <TailwindcssButton>
                        <Link to="/destinations"> Let's Get Out There! </Link>
                    </TailwindcssButton>
                    {!user ? (
                        <>
                            <TailwindcssButton>
                                <Link to="/login"> User Login </Link>
                            </TailwindcssButton>
                            <TailwindcssButton>
                                <Link to="/signup"> User Sign Up </Link>
                            </TailwindcssButton>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )

    function TailwindcssButton(props) {
        return (
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-3xl px-6 py-4 text-center mr-2 mb-2">{props.children}</button>
        )
    }
}

export default Homepage;