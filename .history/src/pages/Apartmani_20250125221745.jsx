import React from "react";

function Apartmani({ data }) {
  return (
    <div>
      <h1>Podaci o gostu - Apartman</h1>
      <p>Ime gosta: {data.guestName}</p>
      <p>Period boravka: {data.startDate} - {data.endDate}</p>
      <p>Izabrani apartman: {data.roomType}</p>
    </div>
  );
}

export default Apartmani;
