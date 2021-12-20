import React, { useState ,useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar'
import NoteState from './contextApi/NoteContext'

function Login() {
    let navigate = useNavigate();
    const context = useContext(NoteState)
    const {loginUser,logedIn} = context;
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
   
function SubmitLog() {
    loginUser(Email , Password)
    .then(r =>{
        alert(r)
    })
   
    console.log(Email + Password );
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
                        <h2 className="mb-3">Sing In</h2>
                        <div className="mb-3">
                            <label  className="form-label">
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
                            <label  className="form-label">
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
                            <button  className="btn btn-primary px-3 w-50 " onClick={SubmitLog}>
                                Sing in
                            </button>
                            <button  className="btn btn-primary px-3 mx-2 mt-2 w-50">
                                Sing in With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
