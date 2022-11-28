import React from 'react';
import Consulta from './Consulta';

const Day = ({calendar, day, search, reservations, setReservations, triggerReservs, setTriggerReservs}) => {
    return (
        <>
            <div className='row'>
                <h4>---------{day}---------</h4>
                {calendar.map( (consulta) =>
                    <>
                        {consulta.date === day ? (
                            <>
                                <Consulta 
                                    key = {consulta.id} 
                                    consulta = {consulta}
                                    reservations = {reservations}
                                    setReservations = {setReservations}
                                    triggerReservs = {triggerReservs}
                                    setTriggerReservs = {setTriggerReservs}
                                />
                            </>
                        ) :(
                            <></>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
 
export default Day;