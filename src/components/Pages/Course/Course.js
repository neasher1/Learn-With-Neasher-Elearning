import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = ({course}) => {
    const {image_url,id,course_fee,course_name,course_description} = course;

    return (
            <div className='col-lg-6'>
                <div className='course-card py-3 px-3'>
                    <div className='top-image'>
                        <img src={image_url} alt="" />
                    </div>
                    <p>{course_fee}</p>
                    <h5>{course_name}</h5>
                    <p>
                        {
                            course_description ? course_description.slice(0,50) +'...' : course_description
                        }
                    </p>
                    <button className='course-btn'><Link to={`/course/${id}`}>Purchase Now</Link></button>
                </div>
            </div>
    );
};

export default Course;