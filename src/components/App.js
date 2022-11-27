import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Calendar from "./Calendar";

function App() {
  const [logged, setLogged] = useState(false);
  const [creating, setCreating] = useState(false);
  const [users, setUsers] = useState([{user : "Emilio"}]);
  const [user, setUser] = useState("");
  const [reservations, setResevations] = useState([]);

  const [search, setSeacrh] = useState("");
  
  useEffect (() => {
    // console.log(users.length);
  }, [])

  useEffect (() => {
    // console.log(user);
  }, [user])

  return (
    <>
      {logged ? (
        <>
          <Navbar setSeacrh = {setSeacrh}/>
          <Calendar search = {search}/>
        </>
      ) : (
        <>
          {creating ? (
            <>
              <Register setUser = {setUser} setLogged = {setLogged}/>
            </>
            ):(
            <>
              <Login setUser = {setUser} setLogged = {setLogged} setCreating = {setCreating} users = {users}/>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
