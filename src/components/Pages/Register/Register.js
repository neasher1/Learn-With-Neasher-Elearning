import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import registerImg from '../../Assets/Images/register.svg';
import googleImg from '../../Assets/icons/google.png';
import githubImg from '../../Assets/icons/github.png'
import { Link } from 'react-router-dom';
import { LearningAuthContext } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';
const Register = () => {

    const { handleGoogle, handleGithub, createUser, userProfile } = useContext(LearningAuthContext);

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoLink = form.photoUrl.value;

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                userProfile(name, photoLink)
                    .then(res => {
                        toast.success('Registration Successfull')
                    })
                    .catch(err => toast.error(err.message))

            })
            .catch(err => {
                toast.error(err.message);
            })
        form.reset();
    }
    // google signIn 
    const googleSignIn = () => {
        handleGoogle()
            .then(res => {
                toast.success('Login Successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })
    };
    const githubSignIn = () => {
        handleGithub()
            .then(res => {
                toast.success('Login Successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-4">
                        <div className='login-form px-2 py-3'>
                            <h3 className='text-center'>SIGN UP HERE </h3>
                            <span className='user-profile'><FaUser /></span>
                            <form onSubmit={handleRegisterSubmit}>
                                <div>
                                    <input type="text" name='name' className='email w-100 mb-2' placeholder='Your Full Name' />
                                </div>
                                <div>
                                    <input type="email" name='email' className='email w-100  mb-2' placeholder='Your Email' />
                                </div>
                                <div>
                                    <input type="text" name='photoUrl' className='email w-100 mb-2' placeholder='Your Photo Link' />
                                </div>
                                <div>
                                    <input type="password" name='password' className='password w-100 mt-2 mb-2' placeholder='Your Password' />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='login-btn '>Sign Up</button>
                                </div>
                            </form>
                            <p>Are You Already Registered ? Please <Link className='register-link' to='/login'>Login</Link></p>
                            <div className='mt-2'>
                                <button className='px-3 py-2' onClick={googleSignIn}> <img src={googleImg} className="google-icon" alt="" />continue with google</button>
                            </div>
                            <div className='mt-2'>
                                <button className='px-3 py-2' onClick={githubSignIn}> <img src={githubImg} className="google-icon" alt="" /> continue with github</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;