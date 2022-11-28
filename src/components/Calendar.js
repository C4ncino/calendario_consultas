import React, { useEffect } from 'react';
import Consulta from './Consulta';

const Calendar = ({calendar, search, reservations, seterservations, triggerReservs, setTriggerReservs}) => {
    return (
        <>
            <div className='row'>
                {calendar.map( (consulta) =>
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
                                        seterservations = {seterservations}
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
                                seterservations = {seterservations}
                                triggerReservs = {triggerReservs}
                                setTriggerReservs = {setTriggerReservs}
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
}
 
export default Calendar;