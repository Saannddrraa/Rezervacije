import React from "react";

function Sobe({ data }) {
  return (
    <div>
      <h1>Podaci o gostu - Soba</h1>
      <p>Ime gosta: {data.guestName}</p>
      <p>Period boravka: {data.startDate} - {data.endDate}</p>
      <p>Izabrana soba: {data.roomType}</p>
    </div>
  );
}

export default Sobe;
