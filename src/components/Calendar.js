import React from 'react';
import Day from './Day';

const Calendar = ({calendar, search, reservations, setReservations, triggerReservs, setTriggerReservs}) => {


    return (
        <>
            <div className='row'>
                {calendar.map( (consulta, i) =>
                    <>
                        {i > 0 ? (
                            <>
                                {consulta.date !== calendar[i - 1].date && i > 0 ? (
                                    <>
                                        <h4>---------{consulta.date}---------</h4>
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
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <>
                                <h4>---------{consulta.date}---------</h4>
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
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
 
export default Calendar;