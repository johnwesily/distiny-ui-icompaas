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
        
        day: userDetails.day,
        month: userDetails.month,
        year: userDetails.year,
        hour: userDetails.hour,
        min: userDetails.min,
        lat: userDetails.lat,
        lon: userDetails.lon,
        tzone: userDetails.tzone,
      };
      console.log(formattedDetails);
      onSubmit(formattedDetails);

    } else {
      alert("Please enter valid numerical values for all fields.");
    }
  };

  return (
  
    <form onSubmit={handleSubmit} className="my-4">
    <h1 className="text-danger">VedicAstro </h1>
    <div className="row">
      <div className="col-md-4">
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
        <label className="text-white">
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
