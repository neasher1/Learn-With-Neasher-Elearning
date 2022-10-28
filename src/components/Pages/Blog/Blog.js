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
                    <div className="col-lg-4">
                        <h4>what is cors??</h4>
                        <p>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. </p>
                    </div>
                    <div className="col-lg-4">
                        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions. Build Extraordinary Apps. 15+ Products & Solutions.</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>How does the private route work?</h4>
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated </p>
                    </div>
                    <div className="col-lg-4">
                        <h4> What is Node? How does Node work?</h4>
                        <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;