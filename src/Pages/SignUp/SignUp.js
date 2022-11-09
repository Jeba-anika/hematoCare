import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png'

import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { setAuthToken } from '../../API/auth';
import { TitleChange } from '../../Title/ChangeTitle';

const SignUp = () => {
    const { register, handleSubmit, resetField } = useForm();
    const {createUser, googleSignIn} = useContext(AuthContext)

    const handleSignUp = (data) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            resetField('name')
            resetField('email')
            resetField('password')
            setAuthToken(user)
        })
        .catch(error => console.error(error))
    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const user =result.user;
            setAuthToken(user)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='flex flex-col lg:flex-row md:flex-row mr-2 ml-2 md:mr-20 md:ml-20 lg:mr-40 lg:ml-40 mt-20 rounded-xl p-8 md:p-10 lg:p-20 '>
            {TitleChange('SignUp')}
            <div className=''>
                <img src={login} alt="" />
            </div>
            <div className='w-full mx-auto mt-5 md:mt-0 lg:mt-0'>
                <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4 w-full ">
                    
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            {...register('name')}
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required={true}
                        />
                    </div>
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
                        Sign Up
                    </Button>
                </form>
                <p className='mt-4'>Already have an account? Please <button className='hover:border-b font-bold hover:border-red-500'><Link to='/login'>Login</Link></button></p>
                <hr className='w-1/2 mx-auto mt-3' />
                <p className='font-bold mt-2 mb-2'>--Or Sign In with--</p>
                <div className='mx-auto w-1/2 flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-0 lg:flex-row justify-around'>
                    <Button onClick={handleGoogleSignIn} color="gray">
                        <FaGoogle></FaGoogle><span className='ml-4'>Google</span>
                    </Button>
                    <Button color="gray">
                        <FaFacebook></FaFacebook><span className='ml-4'>Facebook</span>
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;