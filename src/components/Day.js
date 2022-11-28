import React from 'react';
import Consulta from './Consulta';

const Day = ({calendar, day, search, reservations, setReservations, triggerReservs, setTriggerReservs}) => {
    return (
        <>
            <div className='row'>
                {calendar.map( (consulta) =>
                    <>
                        {consulta.date === day ? (
                            <>
                            {search ? (
                                <>
                                    {consulta.doctor.search(search) !== -1 || 
                                    consulta.field.search(search) !== -1 || 
                                    consulta.date.search(search) !== -1 || 
                                    consulta.schedule.search(search) !== -1 ? (
                                        <Consulta 
                                            key = {consulta.id} 
                                            consulta = {consulta}
                                            reservations = {reservations}
                                            setReservations = {setReservations}
                                            triggerReservs = {triggerReservs}
                                            setTriggerReservs = {setTriggerReservs}
                                        /> 
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ) : (
                                <Consulta 
                                    key = {consulta.id} 
                                    consulta = {consulta}
                                    reservations = {reservations}
                                    setReservations = {setReservations}
                                    triggerReservs = {triggerReservs}
                                    setTriggerReservs = {setTriggerReservs}
                                />
                            )}
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