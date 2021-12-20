import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Navbar from './Components/Navbar'

import NoteState from './contextApi/NoteState'

function App() {
  return (
    <NoteState>
    <Router>
    <Routes>
      <Route path="/login" caseSensitive={false} element={<Login />} />
      <Route path="/register" caseSensitive={false} element={<Register />} />
      <Route path="/" caseSensitive={false} element={ <Home/> } />
    </Routes>
  </Router>
  </NoteState>
  );
}

export default App;
