import React, { useState, useContext } from 'react'
import NoteContext from '../contextApi/NoteContext'

function Note({ d }) {
    const Context = useContext(NoteContext)
    const { UpdateUser, deleteUser } = Context
    const [show, setShow] = useState(false)
    const [tittle, setTittle] = useState("")
    const [desc, setDesc] = useState("")

    function updateNote() {
        // alert("I am an alert box!");
        let newNote = {
            name: tittle,
            desc: desc
        }
     
        UpdateUser(d.id, newNote)
        setShow(false)
    }
    function deleteNot() {
        deleteUser(d.id)
    }
    function UpdateFnote() {
        setTittle(d.name)
        setDesc(d.desc)
     
        setShow(true)
    }
    function cancel() {
        setShow(false)
    }
    return (

        <div class="col-sm-6 col-md-6 col-lg-4 mt-2" >
            <div className="card mx-auto " >
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                {show === false ? 
                <div >
                <h5 className="card-title">  {d.name}</h5>
                    <p className="card-text">
                        {d.desc}
                    </p>
                    <button className="btn btn-danger" onClick={deleteNot}>
                        delete
                    </button>
                   
                    <button className="btn btn-success" onClick={UpdateFnote}>Update </button>
                </div> :
                <div className="">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Enter youtr Tittle
                            </label>
                            <input
                                value={tittle}
                                onChange={(e) => setTittle(e.target.value)}
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Note tittle"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Example textarea
                            </label>
                            <textarea
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                            />
                        </div>
                        <button className="btn btn-danger" onClick={cancel} >
                        cancel
                    </button>
                        <button type="button" className="btn btn-primary" onClick={updateNote}>
                            Update
                        </button>
                    </div>
                }
                   
                  
                </div>
            </div>
            {/* <div
                            className="modal fade "
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className=" modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">
                                            Modal title
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                Enter youtr Tittle 
                                            </label>
                                            <input
                                                value={tittle}
                                                onChange={(e)=> setTittle(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Note tittle"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                                Example textarea
                                            </label>
                                            <textarea
                                                value={desc}
                                                onChange={(e)=> setDesc(e.target.value)}
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateNote}>
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
        </div>

    )
}

export default Note
