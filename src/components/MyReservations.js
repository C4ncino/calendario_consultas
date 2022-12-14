import React, { useEffect } from 'react';
import Consulta from './Consulta';

const MyReservations = ({calendar, reservations, setReservations, triggerReservs, setTriggerReservs}) => {
    
    useEffect(() => {
    }, [triggerReservs])
    
    return (
        <>
            <p/>
                {reservations.length ? (
                    <>
                        <div className='container'>
                            <div className='row'>
                                {reservations.map( (reservation) =>
                                    <Consulta 
                                        key = {reservation.id} 
                                        consulta = {reservation}
                                        reservations = {reservations}
                                        setReservations = {setReservations}
                                        triggerReservs = {triggerReservs}
                                        setTriggerReservs = {setTriggerReservs}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p/>
                            <h3>No hay reservaciones</h3> 
                        </div>
                    </> 
                )}
        </>
    );
}
 
export default MyReservations;