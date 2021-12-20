import React, { useContext } from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Loder from './Components/loder'
import NoteContext from './contextApi/NoteContext'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { analytics, auth } from './Config'
import { useNavigate, NavLink } from 'react-router-dom';


export default function Home() {
    let navigate = useNavigate();
    const a = useContext(NoteContext)
    const { LoderShow, logedIn } = a
    function locktion() {
        if (auth.currentUser == null) {

        } else if (auth.currentUser) {

        }
        else {
            // navigate('/login');
        }
        console.log("currnt" + auth.currentUser);
    }
    locktion();
    return (
        <div>
            {logedIn === true ?
                <div >
                    <Navbar />
                    {LoderShow === false ? <Body /> : <Loder />}:
                </div> : <div >

                    <Navbar />
                    <h1 className='text-center'>Plese Log In or Sing Up</h1>
                    <div className="d-flex justify-content-center">
                                <NavLink className="btn btn-outline-success mx-2 btn-sm" type="submit" to="/login">
                                    Login
                                </NavLink>
                                <NavLink className="btn btn-outline-success  mx-2 btn-sm" type="submit" to="/register">
                                    Sing Up
                                </NavLink>
                            </div>
                </div>
            }


        </div>
    )
}
