import React from 'react';
import { Accordion } from 'react-bootstrap';
import faq from '../../Assets/Images/faq.svg'
const FAQ = () => {
    return (
        <div>
            <div className="container">
            <h2 className='text-center py-2'>Frequiently Asked Question</h2>
                <div className="row py-4 align-items-center">
                    
                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Can I Purchase Course From This Website?</Accordion.Header>
                                <Accordion.Body>
                                    At first go to our website then login and When You Dont Have An Accout Please Register First Then Get Premium Access To Our Website .... Happy Learning 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is the purpose of This Course In your website?</Accordion.Header>
                                <Accordion.Body>
                                    The Main Purpose Of This Website Course Is Mainly Designed For those People Who Are Intereted in Programming To Learn
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How Do I Apply ?</Accordion.Header>
                                <Accordion.Body>
                                    At First You Have To Login Then You Can get Our Premium Access
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How Do I Follow Instruction ?</Accordion.Header>
                                <Accordion.Body>
                                    please Maintain your time and manage your study first Then At least do programming practice minimum 6 hr a Day ! 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            
                      
                   
                    </div>
                    <div className="col-lg-6">
                        <img src={faq} className="w-100 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;