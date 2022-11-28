import React from 'react';
import Consulta from './Consulta';

const Calendar = ({calendar, search, reservations, seterservations, triggerReservs, setTriggerReservs}) => {

    return (
        <>
            <div className='row'>
                {calendar.map( (consulta) =>
                    <>
                        {search ? (
                            <>
                                {search ? (
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