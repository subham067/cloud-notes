import React, { useContext, useState, useEffect } from 'react'
import Note from './Note'
import InpNote from './InpNote'

import NoteContext from '../contextApi/NoteContext'

function Body() {
    const Context = useContext(NoteContext)
    const { User } = Context;
  
    
    const [Allnote, setAllnote] = useState(User)
    useEffect(() => {
        User.toString()
        setAllnote(User)
    }, [ User])

    return (
        <div>
            <div className='container' >

                <InpNote />
                
                <h1 className='text-center'>All Notes</h1>
                <div class="row">
                    {Allnote.map((data) => {
                        return <Note   d={data} />
                    })}
                   
                </div>

            </div>
          
        </div>
    )
}

export default Body
