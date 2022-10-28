import React from 'react';
import './Home.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-main'>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h1 className='text-white py-5'>LEARN SOMETHING NEW WITH BETTER QUALITY</h1>
                        <h4 className='text-white py-5'>Versatile Training Programs to Help You Achieve Your Goals. Learn More Details Today. We Offer <br /> Comprehensive Training Programs Suited to Your Needs. Learn More. For the Vision Impaired. With Industry Employment. <br /> Online Technical Courses. Opportunities-Call today.</h4>
                       <div>
                        <button className='btn-course py-3 my-3'><Link to='/courses' className='mx-2' style={{'textDecoration':'none' , 'color':'white'}}>Browse Courses</Link><FaArrowRight/></button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;