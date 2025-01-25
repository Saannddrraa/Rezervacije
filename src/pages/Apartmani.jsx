import React from "react";

function Apartmani({ guestInfo }) {
  return (
    <div>
      <h1>Podaci o gostu - Apartman</h1>
      <p>Ime gosta: {guestInfo.guestName}</p>
      <p>Period boravka: {guestInfo.startDate} - {guestInfo.endDate}</p>
      <p>Izabrani apartman: {guestInfo.roomType}</p>
    </div>
  );
}

export default Apartmani;
