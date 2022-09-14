import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

<<<<<<< HEAD
function NavBar(){
return(
    <div>hello</div>
)
=======

function Navbar() {

    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("Home")

    return (
       <div>
            Hello World!
       </div>
    )
>>>>>>> cb06660498cf0c759a187d07e3987d092e47c8d0
}

export default Navbar