import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
import MyReservations from "./MyReservations";

function App() {
  const [logged, setLogged] = useState(false);
  const [creating, setCreating] = useState(false);
  const [seeReservs, setSeeReservs] = useState(false);

  const [users, setUsers] = useState([{user : "Emilio"}]);
  const [user, setUser] = useState("");
  const [reservations, setResevations] = useState([]);

  const [calendar, setCalendar] = useState([]);
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
          <Navbar 
            user = {user} 
            seeReservs = {seeReservs} 
            setSeeReservs = {setSeeReservs} 
            search = {search} 
            setSeacrh = {setSeacrh} 
            setLogged = {setLogged}
          />
          {seeReservs ? (
            <MyReservations reservations = {reservations}/>
          ) : (
            <Calendar calendar = {calendar} search = {search}/>
          )}
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
