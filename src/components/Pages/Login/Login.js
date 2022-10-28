import React, { useContext } from 'react';
import loginImg2 from '../../Assets/Images/loginImg2.svg';
import { FaUser } from 'react-icons/fa';
import googleImg from '../../Assets/icons/google.png';
import githubImg from '../../Assets/icons/github.png'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LearningAuthContext } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';
const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";;
    const navigate = useNavigate();
    const { handleGoogle, handleGithub, handleLogin } = useContext(LearningAuthContext);
    // login with form
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogin(email, password)
            .then(res => {
                toast.success('Login Successfull');
                navigate(from, { replace: true });

            })
            .catch(err => {
                toast.error(err.message);
            })
        // reset form 
        form.reset();
    };
    // google signIn
    const googleSignIn = () => {
        handleGoogle()
            .then(res => {
                toast.success('Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
            })
    };
    // githubSignIn
    const githubSignIn = () => {
        handleGithub()
            .then(res => {
                toast.success('Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-4 py-4">
                        <div className='login-form px-3 py-4'>
                            <h3 className='text-center pt-3'>SIGN IN</h3>
                            <span className='user-profile'><FaUser /></span>
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                    <input type="email" name='email' className='email w-100 mt-2 mb-2' placeholder='Your Email' />
                                </div>
                                <div>
                                    <input type="password" name='password' className='password w-100 mt-2 mb-2' placeholder='Your Password' />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='login-btn '>LogIn</button>
                                </div>
                            </form>
                            <p>Dont Have An Account? Please <Link className='register-link' to='/register'>Register</Link></p>
                            <div className='mt-2'>
                                <button onClick={googleSignIn} className='px-3 py-2'> <img src={googleImg} className="google-icon" alt="" /> Continue with google</button>
                            </div>
                            <div className='mt-2'>
                                <button onClick={githubSignIn} className='px-3 py-2'> <img src={githubImg} className="google-icon" alt="" /> Continue with github</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;