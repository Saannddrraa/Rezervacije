import React from 'react'

function Sobe({ guestInfo }) {
    console.log(guestInfo); 
  return (
    <div className="sobe">
      <h2>Podaci o gostu - Soba</h2>
      {guestInfo ? (
        <div>
          <p><strong>Ime:</strong> {guestInfo.guestName}</p>
          <p><strong>Datum dolaska:</strong> {guestInfo.startDate}</p>
          <p><strong>Datum odlaska:</strong> {guestInfo.endDate}</p>
          <p><strong>Soba:</strong> {guestInfo.roomType}</p>
        </div>
      ) : (
        <p>Nema podataka o gostu.</p>
      )}
    </div>
  );
}

export default Sobe;
