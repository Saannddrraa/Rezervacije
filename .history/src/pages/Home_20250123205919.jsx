import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/styles/Home.scss'; 
import GuestForm from '../components/GuestForm';
import DatеRange from '../components/DatеRange';

function Home() {
    
  return (
    <>
      <DateRange/>
      <GuestForm/>
    </>
      
     
  );
}

export default Home;