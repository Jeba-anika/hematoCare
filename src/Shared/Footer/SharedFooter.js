import { Footer } from 'flowbite-react';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import logo from '../../assets/logo.png'

const SharedFooter = () => {
    return (
        <div>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='flex'>
                            <Footer.Brand
                                src={logo}
                                alt="HematoCare Logo"
                                name="HematoCare"
                            />
                            <p className='font-bold text-xl'><span className='text-red-400'>Hemato</span>Care</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="About" />
                                
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                
                            </div>
                            <div>
                                <Footer.Title title="Terms and Conditions" />
                                
                            </div>
                            
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Flowbite™"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsGithub}
                            />
                        
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default SharedFooter;