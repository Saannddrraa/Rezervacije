function Sobe({ guestInfo }) {
    return (
      <div>
        <h1>Podaci o gostu - Soba</h1>
        <p>Ime gosta: {guestInfo.guestName}</p>
        <p>Period boravka: {guestInfo.startDate} - {guestInfo.endDate}</p>
        <p>Izabrana soba: {guestInfo.roomType}</p>
      </div>
    );
  }
  
  export default Sobe;
  
