import React from "react";
import Camera from "../image/Camera.gif"
import { Card } from 'flowbite-react';

function AboutUs() {

    return (
        <div>
            <div className="flex items-center justify-center scale-100 p-5">
                <img src={Camera} alt="logo" />
            </div>
            <div className="max-w-sm scale-100">
                <Card
                    horizontal={true}
                    imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default AboutUs