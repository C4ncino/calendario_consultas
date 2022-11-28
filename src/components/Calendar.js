import React from 'react';
import Day from './Day';
import Consulta from './Consulta';

const Calendar = ({calendar, search, reservations, setReservations, triggerReservs, setTriggerReservs}) => {

    return (
        <>
            <div className='row'>
                {calendar.map( (consulta, i) =>
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
                            <>
                                {i > 0 ? (
                                    <>
                                        {consulta.date !== calendar[i - 1].date && i > 0 ? (
                                            <Day
                                                key = {consulta.date} 
                                                calendar = {calendar} 
                                                day = {consulta.date}
                                                search = {search} 
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
                                    <Day
                                        key = {consulta.date} 
                                        calendar = {calendar} 
                                        day = {consulta.date}
                                        search = {search} 
                                        reservations = {reservations} 
                                        setReservations = {setReservations}
                                        triggerReservs = {triggerReservs}
                                        setTriggerReservs = {setTriggerReservs}
                                    />
                                )}
                            </>
                        )}

                    </>
                )}
            </div>
        </>
    );
}
 
export default Calendar;