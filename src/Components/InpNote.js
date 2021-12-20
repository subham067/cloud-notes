import React, { useState, useContext } from 'react'


import NoteContext from '../contextApi/NoteContext'
import {  auth } from '../Config'
function InpNote() {

    const Context  = useContext(NoteContext)
    const { Adddoc } = Context;
    const [tittle, setTittle] = useState("")
    const [desc, setDesc] = useState("")
    
    let note = {
        name: tittle,
        desc: desc,
        userId : auth.currentUser.uid
    }
    const Addinput= ()=>{
         Adddoc(note)
         setTittle("")
         setDesc("")
    }
    
    
    return (
        <div>
            <div className="w-75 mx-auto">
                <h3 className='text-center'>Input Notes</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter youtr Tittle
                    </label>
                    <input
                        value={tittle}
                        onChange={e => setTittle(e.target.value)}
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
                        onChange={e => setDesc(e.target.value)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                    />
                </div>
                <button class="btn btn-primary" onClick={Addinput}>Submit</button>
            </div>
        </div>
    )
}

export default InpNote
