import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Dropdown, Avatar } from "flowbite-react"
import Logo from "../image/Logo.png"


function NavBar({ onLogout, user }) {

    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("Home")

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
        .then(() => navigate("/"));
    }

    function hideSearchAndFilter () {
        return activeItem === "Homepage"
      }

    return (
        <>
        {hideSearchAndFilter() ? 
        (<Navbar
            fluid={true}
            rounded={true}>
            <Navbar.Brand>
                <Link to="/">
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-20 rounded-lg"
                        alt="Flowbite Logo" />
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}>
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item onClick={handleLogout}>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={activeItem === "Destinations"}
                    onClick={() => setActiveItem("Destinations")}>
                    <Link to="/destinations"> Destinations </Link>
                </Navbar.Link>

                <Navbar.Link 
                    href="/navbars"
                    active={activeItem === "Add A Review!"}>
                    <Link to="/create"> Add A Review! </Link>
                </Navbar.Link>

                <Navbar.Link 
                    href="/navbars"
                    active={activeItem === "About Us"}>
                    <Link to="/about"> About Us </Link>
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>) : null}
        </>
    )
}

export default NavBar