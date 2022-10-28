import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import shop from '../../Assets/Images/shop.svg'
const CourseDetails = () => {
    const course = useLoaderData();
     const {image_url,id,course_fee,course_name,course_description} = course;
    return (
        <div>
            <div className="container">
                <div className="row mt-3 align-items-center">
                    <div className="col-lg-6">
                        <div className='course-card'>
                            <div className='top-image-details'>
                                <img src={image_url} alt="" />
                            </div>
                            <p>{course_fee}</p>
                            <h5>{course_name}</h5>
                            <p>
                                {
                                    course_description ? course_description.slice(0,150) +'...' : course_description
                                }
                            </p>
                            <button className='course-btn'><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={shop} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;