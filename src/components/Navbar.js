import React from 'react';

const Navbar = ({user, seeReservs, setSeeReservs, search, setSearch, setLogged, setUser, setCreating}) => {

    function cambioPagina(){
        setSeeReservs(!seeReservs);
    }

    const onChange = (e) => {
        if (e.target.name === "search"){
            setSearch(e.target.value);  
        }
    };

    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center p-1">
                <button className='btn navbar-brand' onClick={() => {seeReservs(false)}}>NAME</button>

                {seeReservs ? (
                    <button 
                        onClick={cambioPagina} 
                        className='btn btn-outline-info tbn-sm text-center m-2'
                    >
                        Calendario
                    </button>
                ) : (
                    <button 
                        onClick={cambioPagina} 
                        className='btn btn-outline-info tbn-sm text-center m-2'
                    >
                        Reservas
                    </button>
                )}

                <input
                    type = "text" 
                    name = "search" 
                    id = "search"
                    placeholder="Buscar..."
                    className='form-control m-2 s-30'
                    value = {search}
                    onChange = {onChange} 
                />

                <div>
                    <label>Hola, {user}</label>

                    <button 
                        onClick={() => {
                            setLogged(false);
                            setCreating(false);
                            setUser("");
                        }} 
                        className='btn btn-outline-info tbn-sm text-center m-2'
                    >
                        Cerrar Sesion
                    </button>
                </div>  

            </nav>
        </> 
    );
}
 
export default Navbar;