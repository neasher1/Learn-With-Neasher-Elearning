import React from 'react';


const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 text-center">
                        <h2 className='text-center'>BLOGS</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 border p-3">
                        <h4>What is Cors??</h4>
                        <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.  </p>
                    </div>
                    <div className="col-lg-6 border p-3">
                        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    </div>
                    <div className="col-lg-6 border p-3">
                        <h4>How does the private route work?</h4>
                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </div>
                    <div className="col-lg-6 border p-3">
                        <h4> What is Node? How does Node work?</h4>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;