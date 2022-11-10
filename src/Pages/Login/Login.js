import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.png'

import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { setAuthToken } from '../../API/auth';
import { TitleChange } from '../../Title/ChangeTitle';


const Login = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, resetField } = useForm();
    const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        setLoading(true)
        console.log(data)
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                resetField('email')
                resetField('password')
                setAuthToken(user)
                setLoading(false)
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error))
    }


    const handleGoogleSignIn = () => {
        setLoading(true)
        googleSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user;
                setAuthToken(user)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }


    if (loading) {
        return <div className="text-center mb-20">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }



    return (
        <div>

            {TitleChange('Login')}

            <div className='flex flex-col lg:flex-row md:flex-row mr-2 ml-2 md:mr-20 md:ml-20 lg:mr-40 lg:ml-40 mt-20 rounded-xl p-8 md:p-10 lg:p-20 '>
                <div className='border-4 border-red-700 rounded-xl'>
                    <img src={login} alt="" />
                </div>
                <div className='w-full mx-auto mt-5 md:mt-0 lg:mt-0'>
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 w-full ">

                        <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                            <div className="mb-2 block text-start">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput

                                {...register('email')}
                                id="email1"
                                type="email"
                                placeholder="Your Email"
                                required={true}
                            />
                        </div>
                        <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                            <div className="mb-2 block text-start">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                {...register('password')}
                                id="password1"
                                type="password"
                                placeholder='Your Password'
                                required={true}
                            />
                        </div>

                        <Button className='lg:w-1/2 lg:mx-auto md:w-1/2 md:mx-auto ' color='failure' pill={true} type="submit">
                            Login
                        </Button>
                    </form>
                    <p className='mt-4'>Don't have an account? Please <button className='hover:border-b font-bold hover:border-red-500'><Link to='/signup'>SignUp</Link></button></p>
                    <hr className='w-1/2 mx-auto mt-3' />
                    <p className='font-bold mt-2 mb-2'>--Or Sign In with--</p>
                    <div className='mx-auto w-1/2 flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-0 lg:flex-row justify-around'>
                        <Button onClick={handleGoogleSignIn} color="gray">
                            <FaGoogle></FaGoogle><span className='ml-4'>Google</span>
                        </Button>
                        <Button onClick={handleFacebookSignIn} color="gray">
                            <FaFacebook></FaFacebook><span className='ml-4'>Facebook</span>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;