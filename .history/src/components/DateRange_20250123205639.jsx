import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/styles/DataRange.scss'; 
import GuestForm from '../components/GuestForm';

function DateRange() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  return (
    <div className="home-container">
    <p>Proveri slobodan termin</p>
      <div className="date-range">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          className="date-input"
        />
        <span className="to-text">to</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          className="date-input"
        />
      </div>
      </div>
   
  )
}

export default DateRange;