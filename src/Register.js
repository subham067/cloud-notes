import React, { useState, useContext,useEffect } from 'react'
import Navbar from './Components/Navbar'
import NoteState from './contextApi/NoteContext'
import { useNavigate } from 'react-router-dom';
function Register() {
    let navigate = useNavigate();
    const context = useContext(NoteState)
    const { register, logedIn } = context;
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    function SubmitLog() {
        register(Email, Password,Name);

        console.log(Email + Password);
    }
    useEffect(() => {
   if (logedIn === true) {
       navigate('/');
   }
}, [logedIn])
    return (
        <div>
            <Navbar />
            <div
                className="container d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
                <div className="col-sm-12 col-md-9 col-lg-6 bg-light">
                    <div className="p-4 round-2">
                        <h2 className="mb-3">Sing Up</h2>
                        <div className="mb-3">
                            <label className="form-label">
                                Enter Your Name
                            </label>
                            <input
                                name='Name'
                                value={Name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder=' Enter Your Name'

                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Email address
                            </label>
                            <input
                                name='Email'
                                value={Email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className="form-control"


                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Password
                            </label>
                            <input
                                name='Password'
                                value={Password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className="form-control"

                            />
                        </div>
                        <div className=" text-center">
                            <button className="btn btn-primary px-3 w-50 " onClick={SubmitLog}>
                                Sing Up
                            </button>
                            <button className="btn btn-primary px-3 mx-2 mt-2 w-50">
                                Sing Up With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
