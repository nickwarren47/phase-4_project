
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Carousel } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext"
import banner from "../image/banner.gif"

function Homepage() {

    const { user } = useContext(AuthContext);

    return (
        <div id='hompage'>
            <div className='bg-[url(https://user-images.githubusercontent.com/106715328/189964202-fef8374d-3e12-4b80-a381-4323525f8ba7.jpg)] h-400 w-full bg-cover bg-center p-20'>
                <div className="flex items-center justify-center scale-125 p-5">
                    <img src={banner} alt="logo" />
                </div>
                <h1 className='text-green-700 text-7xl font-bold mt-12 text-center p-0'>Welcome to Wanderlust!</h1>
                <h2 className="text-green-700 text-5xl font-bold mt-5 text-center pt-0"> Your place to find a place</h2>
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
            <div className="h-80 sm:h-64 xl:h-90 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190456198-b9f3370e-746b-47d4-b4bd-bc6405aa3d74.png"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190461397-06583ff4-ac7e-4e1e-95fc-e912c5fb23c8.png"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190463514-a94ccd79-7e99-48d6-85a7-46670816b324.png"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190532997-a08d1f1f-81f5-4922-80fd-0de1572f6e3a.png"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190531597-a7d960cc-4b8a-435e-a377-f4342a12a030.png"
                        alt="..."
                    />
                    <img
                        src="https://user-images.githubusercontent.com/106715328/190532545-c0a855be-57ab-4667-ad83-c0ebab919789.png"
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
        
    )


    function TailwindcssButton(props) {
        return (
            <button type="button" className="text-white bg-gradient-to-r from-green-400 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-large rounded-lg text-3xl px-6 py-4 text-center mr-2 mb-2">{props.children}</button>
        )
    }
}

export default Homepage;