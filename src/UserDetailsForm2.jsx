import React, { useState } from "react";

const UserDetailsForm2 = ({ onSubmit }) => {
  const [userDetails, setUserDetails] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    lat: "",
    lon: "",
    tzone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      Object.values(userDetails).every(
        (value) => !isNaN(value) && value !== ""
      );

    if (isValid) {
      const formattedDetails = {
        
        day: parseInt(userDetails.day, 10),
        month: userDetails.month,
        year: parseInt(userDetails.year, 10),
        hour: parseInt(userDetails.hour, 10),
        min: parseInt(userDetails.min, 10),
        lat: parseFloat(userDetails.lat),
        lon: parseFloat(userDetails.lon),
        tzone: parseFloat(userDetails.tzone),
      };
      console.log(formattedDetails);
      onSubmit(formattedDetails);

    } else {
      alert("Please enter valid numerical values for all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
    <div className="row">
      <div className="col-md-4">
        <label>
          Day:
          <input
            type="text"
            name="day"
            value={userDetails.day}
            onChange={handleChange}
            className="form-control"
            placeholder="17"
          />
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Month:
          <input
            type="text"
            name="month"
            value={userDetails.month}
            onChange={handleChange}
            className="form-control"
            placeholder="08"
          />
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={userDetails.year}
            onChange={handleChange}
            className="form-control"
            placeholder="1997"
          />
        </label>
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-4">
        <label>
          Hour:
          <input
            type="text"
            name="hour"
            value={userDetails.hour}
            onChange={handleChange}
            className="form-control"
            placeholder="16"
          />
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Min:
          <input
            type="text"
            name="min"
            value={userDetails.min}
            onChange={handleChange}
            className="form-control"
            placeholder="40"
          />
        </label>
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-6">
        <label>
          Lat:
          <input
            type="text"
            name="lat"
            value={userDetails.lat}
            onChange={handleChange}
            className="form-control"
            placeholder="18.8714"
          />
        </label>
      </div>
      <div className="col-md-6">
        <label>
          Lon:
          <input
            type="text"
            name="lon"
            value={userDetails.lon}
            onChange={handleChange}
            className="form-control"
            placeholder="79.4443"
          />
        </label>
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-12">
        <label>
          Timezone:
          <input
            type="text"
            name="tzone"
            value={userDetails.tzone}
            onChange={handleChange}
            className="form-control"
            placeholder="5.5"
          />
        </label>
      </div>
    </div>
  
    <button type="submit" className="btn btn-primary mt-3">
      Submit
    </button>
  </form>
  
  );
};

export default UserDetailsForm2;
