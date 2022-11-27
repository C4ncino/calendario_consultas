import React from 'react';

const Navbar = ({user, seeReservs, setSeeReservs, search, setSearch, setLogged}) => {

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
                        className='btn btn-outline-danger tbn-sm text-center m-2'
                    >
                        Clanedario
                    </button>
                ) : (
                    <button 
                        onClick={cambioPagina} 
                        className='btn btn-outline-danger tbn-sm text-center m-2'
                    >
                        Reservas
                    </button>
                )}

                <input
                    type = "text" 
                    name = "search" 
                    id = "search"
                    placeholder="Buscar..."
                    className='form-control m-2'
                    value = {search}
                    onChange = {onChange} 
                />

                <div>
                    <div>
                        <label>Hola, {user}</label>
                    </div>
                    <div>
                        <button 
                            onClick={() => {setLogged(false)}} 
                            className='btn btn-outline-danger tbn-sm text-center m-2'
                        >
                            Cerrar Sesion
                        </button>
                    </div>
                </div>  

            </nav>
        </> 
    );
}
 
export default Navbar;