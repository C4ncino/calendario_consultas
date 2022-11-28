import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
import MyReservations from "./MyReservations";
import data from "../data/consultas.json";

function App() {
  const [logged, setLogged] = useState(false);
  const [creating, setCreating] = useState(false);
  const [seeReservs, setSeeReservs] = useState(false);

  const [users, setUsers] = useState([{user : "Emilio", reservs : []}, {user : "Carlos", reservs : []}]);
  const [index, setIndex] = useState(-1);
  const [user, setUser] = useState("");
  const [reservations, setResevations] = useState([]);
  const [triggerReservs, setTriggerReservs] = useState(false);

  const [calendar, setCalendar] = useState([]);
  const [search, setSearch] = useState("");

  function searchUser(){
    let indice = -1;

    for(let i = 0; i < users.length && index === -1; i++){
      if(user === users[i].user){
        indice = i;
      }
    }
    return indice;
  }

  useEffect (() => {
    setCalendar(data);
  }, [])

  useEffect (() => {
    if(user !== ""){
      setIndex(searchUser());
      if(searchUser() >= 0){
        setResevations(users[searchUser()].reservs);
      }
      else{
        // creacion usuario
      }
    }
    else{
      setIndex(-1);
    }
  }, [user])

  useEffect (() => {
    if(index >= 0){
      users[index].reservs = reservations;
    }
  }, [reservations, triggerReservs])

  return (
    <>
      
      <div className='container-fluid text-center bg-ligth'>
        {logged ? (
          <>
            <Navbar 
              user = {user} 
              seeReservs = {seeReservs} 
              setSeeReservs = {setSeeReservs} 
              search = {search} 
              setSearch = {setSearch} 
              setLogged = {setLogged}
              setUser = {setUser}
              setCreating = {setCreating}
            />
            {seeReservs ? (
              <MyReservations 
                calendar = {calendar} 
                reservations = {reservations} 
                seterservations = {setResevations}
                triggerReservs = {triggerReservs}
                setTriggerReservs = {setTriggerReservs}
              />
            ) : (
              <Calendar 
                calendar = {calendar} 
                search = {search} 
                reservations = {reservations} 
                seterservations = {setResevations}
                triggerReservs = {triggerReservs}
                setTriggerReservs = {setTriggerReservs}
              />
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
      </div>
    </>
  );
}

export default App;
