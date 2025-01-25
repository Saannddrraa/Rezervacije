import React, { useState } from 'react';
function GuestForm({ onSubmit }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guestName, setGuestName] = useState("");
    const [roomType, setRoomType] = useState("");
    const [accommodationType, setAccommodationType] = useState("soba");
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const guestData = {
        startDate,
        endDate,
        guestName,
        roomType,
        accommodationType,
      };
      onSubmit(guestData); 
      alert("Podaci uspešno zabeleženi!");
    };
  
    const rooms = [
      "Soba 1", "Soba 2", "Pomocna soba 1", "Soba 3", "Soba 4", "Pomocna soba 2"
    ];
  
    const apartments = [
      "Apartman 1", "Apartman 2", "Apartman 3", "Apartman 4"
    ];
  
    return (
      <div className="guest-form">
        <h1>Zabeleži Gosta</h1>
        <form onSubmit={handleFormSubmit}>
          {/* Start Date */}
          <div className="form-group">
            <label>Start Date:</label>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
              required
            />
          </div>
  
          {/* End Date */}
          <div className="form-group">
            <label>End Date:</label>
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
              required
            />
          </div>
  
          {/* Name */}
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
  
          {/* Accommodation Type */}
          <div className="form-group">
            <label>Izaberite tip smeštaja:</label>
            <select 
              value={accommodationType} 
              onChange={(e) => setAccommodationType(e.target.value)}
            >
              <option value="soba">Soba</option>
              <option value="apartman">Apartman</option>
            </select>
          </div>
  
          {/* Room or Apartment Selection */}
          <div className="form-group">
            <label>{accommodationType === "soba" ? "Izaberite sobu:" : "Izaberite apartman:"}</label>
            <select 
              value={roomType} 
              onChange={(e) => setRoomType(e.target.value)}
            >
              {(accommodationType === "soba" ? rooms : apartments).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
  
          {/* Submit Button */}
          <div className="form-group">
            <button type="submit">Zabeleži</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default GuestForm;