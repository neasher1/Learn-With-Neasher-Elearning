import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Sidenav from '../../Shared/SideNav/Sidenav';

const CourseLayout = () => {
    return (
        <div>
            <Header></Header>
                <div className="row">
                <div className="col-lg-9">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-lg-3">
                        <Sidenav></Sidenav>
                    </div>
                   
                </div>
        </div>
    );
};

export default CourseLayout;