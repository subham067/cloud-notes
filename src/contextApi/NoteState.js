
import React, { useEffect, useState } from 'react'
import NoteContext from './NoteContext'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile , signOut} from 'firebase/auth'
import { analytics, auth } from '../Config'

function NoteState(props) {
    let allData = [];
    const [User, setUser] = useState([])
    const [logedIn, setLogedIn] = useState(false)
    const [LoderShow, setLoderShow] = useState(false)
    const userCollectionRef = collection(analytics, "users");

    const loader = async () => {
        setLoderShow(false)
    }
    const loged =  (log) => {
        setLogedIn(log)
    }
    const logOut =  () => {
       signOut(auth)
         localStorage.removeItem("Itemkey");
       loged(false)
    }
    const register = async (email, password, name) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
               
                .catch((err) =>
                    console.log(err)
                );

            await updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                let LocalData = {
                    email : email,
                    password : password
                }
                localStorage.setItem("Itemkey", JSON.stringify(LocalData))
                getUser();
               
                loged(true)
            })
            await  loged(true)
            .catch(
                (err) => console.log(err)
                );
                let LocalData = {
                        email : email,
                        password : password
                    }
               localStorage.setItem("Itemkey", JSON.stringify(LocalData))
            
           
        } catch (err) {
            console.log(err);
        }
    };
  
    // subham1ghosh@gmail.com  Subham321
    const loginUser = (email, password) => {
        try{
        signInWithEmailAndPassword(auth, email, password)
     
            .then((result) => {
                let LocalData = {
                    email : email,
                    password : password
                }
                localStorage.setItem("Itemkey", JSON.stringify(LocalData))
                getUser();
               
                loged(true)
            })
        } catch (err) {
            console.log(err);
        }
        
    }
    const deleteUser = async (id) => {
        setLoderShow(true)
        const userDoc = doc(analytics, "users", id);
        await deleteDoc(userDoc)
        await getUser();
        await loader();
    }

    const UpdateUser = async (eii, newNote) => {
        setLoderShow(true)
        const userDoc = doc(analytics, "users", eii);
        await updateDoc(userDoc, newNote)
        await getUser();
        await loader();
    }
    const Adddoc = async (notee) => {
        setLoderShow(true)
        await addDoc(userCollectionRef, notee);
        await getUser();
        await loader();
    }
    const getUser = async () => {
        setLoderShow(true)
        const data = await getDocs(userCollectionRef)
        // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        let allNotes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        allNotes.map(a =>{
            if (a.userId ===  auth.currentUser.uid) {
                allData.push(a)
            }
        })
        setUser(allData)
        await loader();

    }
    useEffect(() => {
        let intTodo;
  if (localStorage.getItem("Itemkey") ) {
      
      intTodo = JSON.parse(localStorage.getItem("Itemkey"));
      loginUser( intTodo.email , intTodo.password)
  }
    }, [])
    return (
        <NoteContext.Provider value={{ loginUser, User, getUser, Adddoc, UpdateUser, deleteUser, LoderShow, register,logedIn,logOut }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
