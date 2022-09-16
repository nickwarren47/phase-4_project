import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react"
import Logo from "../image/Logo.png"
import { AuthContext } from "../Context/AuthContext"
import { useLocation } from 'react-router-dom';


function NavBar() {

    const navigate = useNavigate();
    const [isNavBarHidden, setIsNavBarHidden] = useState(true)
    const { user, signout } = useContext(AuthContext);

    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup") {
            setIsNavBarHidden(true);
        }
        else {
            setIsNavBarHidden(false);
        }
    }, [location]);

    // DON'T change this f(x) later
    function handleLogout() {
       signout().then(() => navigate("/"))
    }

    return (
        <>
            {!isNavBarHidden ?
                (<Navbar
                    fluid={true}
                    rounded={true}>
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src={Logo}
                                className="mr-3 h-6 sm:h-20 rounded-lg"
                                alt="Wanderlust Logo" />
                        </Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        {user ? (
                            <>
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={<Avatar alt="User settings" img={user.avatar} rounded={true} />}>
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            {user.username}
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            Hello, {user.name}!
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item onClick={handleLogout}>
                                        Sign out
                                    </Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </>
                            ) : (
                            <Button
                                color="light"
                                pill={true}>
                               <Link to="/login"> Login </Link> 
                            </Button>
                        )}

                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link
                            active={location.pathname === "/destinations"}>
                            <Link to="/destinations"> Destinations </Link>
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/create"}>
                            {user ? (<Link to="/create"> Add A Review! </Link>) : null}
                        </Navbar.Link>

                        <Navbar.Link
                            active={location.pathname === "/about"}>
                            <Link to="/about"> About Us </Link>
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>) : null}
        </>
    )
}

export default NavBar