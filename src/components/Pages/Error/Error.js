import React from 'react';
import { FaSadTear} from "react-icons/fa";
import './Error.css'
const Error = () => {
    return (
        <div className='py-4'>
             <div className='d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <FaSadTear className='error-icon img-fluid'></FaSadTear>
                    <h1 className='py-4'>NOTHING FOUND IN THIS PAGE</h1>
                </div>
            </div>
        </div>
    );
};

export default Error;