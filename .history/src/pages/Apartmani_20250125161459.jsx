import React from 'react';

function Apartmani({ guestInfo }) {
  return (
    <div className="apartmani">
      <h2>Podaci o gostu - Apartman</h2>
      {guestInfo ? (
        <div>
          <p><strong>Ime:</strong> {guestInfo.guestName}</p>
          <p><strong>Datum dolaska:</strong> {guestInfo.startDate}</p>
          <p><strong>Datum odlaska:</strong> {guestInfo.endDate}</p>
          <p><strong>Apartman:</strong> {guestInfo.roomType}</p>
        </div>
      ) : (
        <p>Nema podataka o gostu.</p>
      )}
    </div>
  );
}

export default Apartmani;
