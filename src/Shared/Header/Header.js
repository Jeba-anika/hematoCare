import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div >
            <Navbar
            className='bg-amber-50'
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <Link className='flex' to='/'>
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="HematoCare Logo"
                    />
                    <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        <span className='text-red-500'>Hemato</span><span>Care</span>
                    </p>
                    </Link>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to='/login'>Login</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to='/signup'>SignUp</Link>
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;