import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/styles/Home.scss'; 
import GuestForm from '../components/GuestForm';
import DateRange from '../components/DateRange';
import Sobe from './Sobe';
import Apartmani from './Apartmani';

function Home() {
  const [guestInfo, setGuestInfo] = useState("");

  const handleGuestFormSubmit = (data) => {
    setGuestInfo(data);
  };

  return (
    <>
      <DateRange />
      <GuestForm onSubmit={handleGuestFormSubmit} />
      {guestInfo && guestInfo.accommodationType === 'soba' && <Sobe guestInfo={guestInfo} />}
      {guestInfo && guestInfo.accommodationType === 'apartman' && <Apartmani guestInfo={guestInfo} />}
    </>
  );
}

export default Home;
