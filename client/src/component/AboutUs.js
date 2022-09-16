import React from "react";
import Camera from "../image/Camera.gif"

function AboutUs() {

    return (
        
        <div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/just-waves.png')] h-screen">
            <div className="flex items-center justify-center scale-100 p-5">
                <img className="rounded-lg border-4 border-black" src={Camera} alt="logo" />
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://user-images.githubusercontent.com/106715328/190684811-68cef350-b33e-4277-ac08-840f57aff480.jpg" alt="Mae" />
                    <div className="flex flex-col justify-between leading-normal p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mae Canlas</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Olympic athlete, never been to the Philippines, loves dogs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://user-images.githubusercontent.com/106715328/190687140-7dc7c6e9-bb4b-4670-9840-2e82acba9563.JPG" alt="Dre" />
                    <div className="flex flex-col justify-between leading-normal p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Andrea Esparza</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hates soccer, think she's from Texas but no clue. Badass teacher</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://user-images.githubusercontent.com/106715328/190688355-bb5da839-c398-464d-99d3-a5e7cdcb9226.jpg" alt="Nick" />
                    <div className="flex flex-col justify-between leading-normal p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nick Warren</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Obsessed with scuba diving, huge nerd, rides motorcycles in free time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs