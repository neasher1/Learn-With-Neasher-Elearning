import React, { useContext, useRef } from 'react';
import './Checkout.css';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { LearningAuthContext } from '../../AuthContext/AuthContext';
const Checkout = () => {

    const {user} = useContext(LearningAuthContext);
    // use react pdf to download pdf
    const {image_url,id,course_fee,course_name} = useLoaderData();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"Programmerz Cafe Course Bill"
    });
    

    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-7" ref={componentRef}>
                        <div className='pdf-border'>
                            <div>
                                <h4 className='text-center'>BILLING DETAILS</h4>
                            </div>
                            <div>
                                <div className="row mx-3">
                                    <div className="col-lg-6">
                                        <h5 className=' custom-border-pdf'>Name : {user.displayName}</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Product ID : #45453435345</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className=' custom-border-pdf'>Product : {course_name}</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Course Fee : {course_fee}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Course Id : {id}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className='custom-border-pdf'>Total : {course_fee}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className='custom-border-pdf'>Email : {user.email}</h6>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className='custom-border-pdf'>Email Status : {user.emailVerified ? <>verified</> : <>Not verified</>}</h6>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-center">
                                       <p className='custom-border-pdf'>Course Photo :</p> <img src={image_url} className="w-25" alt="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <h6 className='custom-border-pdf'>Thanks To Purchase Our Course </h6>
                                    </div>
                                    <button onClick={handlePrint} className='bill-btn'>Download Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;