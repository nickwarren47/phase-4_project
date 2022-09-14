import React from "react";
import { Link, useNavigate } from "react-router-dom"


function Homepage() {

    return (
        <div>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/189964202-fef8374d-3e12-4b80-a381-4323525f8ba7.jpg)] h-400 w-full bg-cover bg-center p-20'>
                <div className="flex items-center justify-center scale-125 p-5">
                    <img src="https://user-images.githubusercontent.com/106715328/188249403-12a9040b-64c2-4069-a05a-21fa8e9a1f6b.png" alt="logo" />
                </div>
                <h1 className='text-white text-7xl font-bold mt-12 text-center p-5'>Welcome to Wanderlust!</h1>
                <h2 className="text-white text-3xl font-light mt-5 text-center"> Your place to find a place</h2>
                <div className="flex items-center justify-center mt-7 space-x-7">
                    <TailwindcssButton>
                        Let's Get Out There!
                    </TailwindcssButton>
                    <TailwindcssButton>
                        <Link to="/login"> User Login </Link>
                    </TailwindcssButton>
                    <TailwindcssButton>
                        <Link to="/signup"> User Sign Up </Link>
                    </TailwindcssButton>
                </div>
            </div>
        </div>
    )

    function TailwindcssButton(props) {
        return (
            <button className="bg-blue-700 text-white text-3xl
          font-large font-bold px-6 py-4 rounded-lg hover:bg-yellow-600">{props.children}</button>
        )
    }
}

export default Homepage;