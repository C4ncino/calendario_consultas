import React, { useEffect, useState } from 'react';

const Consulta = ({consulta, reservations, seterservations, triggerReservs, setTriggerReservs}) => {
    
    const [trigger, setTrigger] = useState(true);

    useEffect (() => {
    }, [reservations, trigger])

    function add(){
        seterservations([...reservations, consulta])
        consulta.taken = "1";
    }
    function remove(){
        reservations.splice(reservations.indexOf(consulta), 1);
        consulta.taken = "0";
        setTrigger(!trigger);
        setTriggerReservs(!triggerReservs);
    }
    function haveReservation(){
        for(let i = 0; i < reservations.length; i++){
            if(consulta.id === reservations[i].id){
                return true;
            }
        }
    }

    return (
        <>
            <div className='col-md-3 pb-4'>
                <div className='card shadow p-3 mb-5 rounded border-ligth'>
                    <div className='card-body'>
                        <h5 className='card-title'>{consulta.doctor}</h5>
                        <p className='card-text'>{consulta.field}</p>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li key={'rating'} className='list-group-item'>Rating: {consulta.rating}</li>
                        <li key={'fecha'} className='list-group-item'>{consulta.date}</li>
                        <li key={'horario'} className='list-group-item'>{consulta.schedule}</li>
                        {consulta.taken === "1" ? (
                            <>
                                {haveReservation() ? (
                                    <li key={'boton'} className='list-group-item'>
                                        <button className='btn btn-danger' onClick={remove}>
                                            Eliminar
                                        </button>
                                    </li>
                                ) : (
                                    <li key={'msg'} className='list-group-item'>Consulta No dispoible</li>
                                )}
                            </>
                        ) : (
                            <li key={'boton'} className='list-group-item'>
                                <button className='btn btn-info' onClick={add}>
                                    Reservar
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Consulta;