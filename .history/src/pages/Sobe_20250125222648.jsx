import React from "react";

function Sobe({ guestInfo }) {
  return (
    <div>
      <h1>Podaci o gostu - Soba</h1>
      <p>Ime gosta: {guestInfo.accommodationType}</p>
    </div>
  );
}

export default Sobe;
