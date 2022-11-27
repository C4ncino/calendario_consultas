import React, { useState } from 'react';
import Consulta from './Consulta';

const Calendar = ({calendar, search}) => {

    return (
        <>
            {calendar.map( (consulta) =>
                <>
                    {search ? (
                        <>
                            {search ? (
                                <Consulta consulta = {consulta}/> 
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <Consulta consulta = {consulta}/>
                    )}
                </>
            )}
        </>
    );
}
 
export default Calendar;