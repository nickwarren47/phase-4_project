import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


function Navbar() {

    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("Home")

    return (
       <div>
            Hello World!
       </div>
    )
}

export default Navbar