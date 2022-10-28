import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'
const Category = ({category}) => {
    const {category_name} = category;
    return (
        <div className='category'>
            <p className='category-single'><Link className='category-link' to={`/courses/${category_name}`}>{category_name}</Link></p>
        </div>
    );
};

export default Category;