import React from 'react';
import Consulta from './Consulta';

const MyReservations = ({reservations}) => {
    return (
        <>
            <p/>
            {reservations.length ? (
                <>
                    <div>
                        <div>
                            {reservations.map( (reservation) =>
                                <Consulta consulta = {reservation}/>
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