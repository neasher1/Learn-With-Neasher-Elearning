import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../../Pages/category/Category';
import './Sidenav.css';
const Sidenav = () => {
    const allCategories = useLoaderData();
    return (
        <div className='side-nav'>
            <div className="course-sidenav py-3">
                {
                    allCategories.map(category=><Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default Sidenav;