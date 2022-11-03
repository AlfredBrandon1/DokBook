import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

import Navbar from '../components/Navbar';

const MyCalendar = () => {

    const [date, setDate] = useState(new Date());
    
    return (
        <><Navbar/>
        <div className='my-calendar'>
            <Calendar
                onChange={setDate}
                value={date}
                />
        </div></>
    );
};

export default MyCalendar;