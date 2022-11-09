import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

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
                {
                    user?.uid ? <>
                        <div className="flex md:order-2">
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="" img={user?.photoURL ? user?.photoURL : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName ? user?.displayName : 'User'}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user?.email ? user?.email : 'User Email'}
                                    </span>
                                </Dropdown.Header>

                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogOut}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                            <Navbar.Toggle />
                        </div>
                    </> :
                        <div className="flex md:order-2">
                            <Button>
                                <Link to='/login'>Login</Link>
                            </Button>
                        </div>
                }
                <Navbar.Collapse>
                    <Navbar.Link>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to='/blogs'>Blogs</Link>
                    </Navbar.Link>
                    {
                        user?.uid && <>
                            <Navbar.Link href="/navbars">
                                My Reviews
                            </Navbar.Link>
                            <Navbar.Link href="/navbars">
                                Add Service
                            </Navbar.Link>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;