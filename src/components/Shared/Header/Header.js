import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Assets/Images/profile.png'
import { FaSignOutAlt} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LearningAuthContext } from '../../AuthContext/AuthContext';
import DarkModeToggle from "react-dark-mode-toggle";
import './Header.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Header = () => {
    const {user , landleLogOut} = useContext(LearningAuthContext);
    // dark mode state 
    const [isDarkMode , setIsDarkMode ] = useState(false);
    

    // handle logOut 
    const handleLogOut =()=>{
        landleLogOut();
    }
    // tooltip
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {user.displayName}
        </Tooltip>
        )
    return (
        <div className='main-header'>
            <Navbar className='header' expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-center logo-custom text-white '><h3 className='text-warning'>Learn With Neasher</h3></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        navbarScroll>
                            <div className="header-link d-flex justify-content-center">
                               <p className='mb-0'><Link to='/home'> Home </Link></p>
                                <p className='mb-0'><Link to='/blog'> Blog </Link></p>
                                <p className='mb-0'><Link to='/faq'> FAQ </Link></p>
                                <p className='mb-0'><Link to='/courses'> Courses </Link></p>
                                {
                                    user&&user.uid ? <></> : <><p className='mb-0'> <Link to='/login'> Login </Link></p>
                                    <p className='mb-0'><Link to='/register'> Register </Link></p></>
                                }
                                
                            </div>
                    </Nav>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-3">
                            <div className='toggle-theme py-2'>
                                <DarkModeToggle onChange={setIsDarkMode}checked={isDarkMode}size={60}/>
                            </div>
                        </div>
                           <div className="col-lg-9">
                                <div className="profile">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-2">
                                        <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                    >
                                                    <div>
                                                    {
                                                user&&user.uid?<><img className='profile-img' src={user?.photoURL? user.photoURL:profile} alt="" /></> : <></>
                                                    }
                                                    </div>
                                                    </OverlayTrigger>
                                           
                                        </div>
                                        <div className="col-lg-10 py-2">
                                            <p className='mb-0 text-white'>{user?.displayName}</p>
                                            <div>
                                               {
                                                user&&user.uid? <> <button onClick={handleLogOut}  className='log-out mt-2'>SignOut <FaSignOutAlt/></button></> :<></>
                                               }
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                           </div>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;