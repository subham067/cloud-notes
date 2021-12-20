import React, { useContext, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import NoteState from '../contextApi/NoteContext'
import {  auth } from '../Config'

function Navbar() {
    const context = useContext(NoteState)
    const { logedIn, logOut } = context;
   
    let navigate = useNavigate();
    function nextPage() {
        logOut()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <div
                        className="navbar-toggler d-flex border-0 d-lg-none" >
                        {logedIn === true ?
                            <div className="d-flex">
                                <h4>Hi {auth.currentUser.displayName.split(' ')[0]}</h4>
                                <div className="btn btn-outline-danger btn-sm" type="button" onClick={nextPage}>
                                    Log out
                                </div>
                            </div> :
                            <div className="d-flex">
                                <NavLink className="btn btn-outline-success mx-2 btn-sm" type="submit" to="/login">
                                    Login
                                </NavLink>
                                <NavLink className="btn btn-outline-success  mx-2 btn-sm" type="submit" to="/register">
                                    Sing Up
                                </NavLink>
                            </div>}
                        <span className="navbar-toggler-icon border p-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contract Us
                                </a>
                            </li>


                        </ul>
                        {logedIn === true ?
                            <div className="d-flex align-items-end">
                                <h5 className='d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block'>Hi {auth.currentUser.displayName.split(' ')[0]}</h5>
                                <button className="btn btn-outline-danger  mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit" onClick={nextPage}>
                                    Log out
                                </button>
                            </div> :
                            <div className="d-flex">
                                <NavLink className="btn btn-outline-success mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit" to="/login">
                                    Login
                                </NavLink>
                                <NavLink className="btn btn-outline-success  mx-2 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block" type="submit" to="/register">
                                    Sing Up
                                </NavLink>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
