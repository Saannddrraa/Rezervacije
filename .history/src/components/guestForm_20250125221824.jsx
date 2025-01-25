import React, { useState } from "react";
import Sobe from "../pages/Sobe";
import Apartmani from "../pages/Apartmani";

function GuestForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // Čuva podatke nakon submit-a

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const guestData = {
      startDate,
      endDate,
      guestName,
      roomType,
      accommodationType,
    };
    setSubmittedData(guestData); // Postavljamo podatke nakon submit-a
  };

  const rooms = [
    "Soba 1",
    "Soba 2",
    "Pomocna soba 1",
    "Soba 3",
    "Soba 4",
    "Pomocna soba 2",
  ];

  const apartments = [
    "Apartman 1",
    "Apartman 2",
    "Apartman 3",
    "Apartman 4",
  ];

  if (submittedData) {
    // Prikazujemo odgovarajuću komponentu na osnovu izbora
    return accommodationType === "soba" ? (
      <Sobe data={submittedData} />
    ) : (
      <Apartmani data={submittedData} />
    );
  }

  return (
    <div className="guest-form">
      <h1>Zabeleži Gosta</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate || ""}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Ime:</label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Unesi ime"
            required
          />
        </div>
        <div className="form-group">
          <label>Izaberite tip smeštaja:</label>
          <select
            value={accommodationType}
            onChange={(e) => {
              setAccommodationType(e.target.value);
              setRoomType(""); // Reset izbora sobe/apartmana
            }}
          >
            <option value="">Izaberite tip smeštaja</option>
            <option value="soba">Soba</option>
            <option value="apartman">Apartman</option>
          </select>
        </div>
        <div className="form-group">
          <label>Izaberite sobu/apartman:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            disabled={!accommodationType}
          >
            <option value="">Izaberite sobu/apartman</option>
            {(accommodationType === "soba" ? rooms : apartments).map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" disabled={!roomType}>
            Zabeleži
          </button>
        </div>
      </form>
    </div>
  );
}

export default GuestForm;
