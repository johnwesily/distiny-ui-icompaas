import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiReport=()=>{
   const [dashaperiod,setDashaperiod]=useState(null);
   const [loading,setLoading]=useState(true);
   const [activeTable,setActiveTable] =useState("mahadasha")

   useEffect(()=>{
    const basicAuth = btoa('684:30fe39681be0abba1a549fd44d5585f7');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${basicAuth}`,
      'Accept-Language':"en",
         
    };

    const requestData = {
        day: 17,
        month: 8,
        year: 1997,
        hour: 16,
        min: 40,
        lat: 18.8714,
        lon: 79.4443,
        tzone: 5.5
    }
 
      axios
      .post('https://json.apireports.com/v1/current_vdasha_all', requestData, {
        headers: headers,
      })
      .then((response) => {
        setDashaperiod(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
   },[])
   
   console.log(dashaperiod)

   function switchTable(table){
    setActiveTable(table)
   }

    return (
        <div>
      {loading ? (
        <p>Loading...</p>
      ) : dashaperiod ? (
         <div>
          <h1>Astrology Apireports</h1>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "mahadasha" ? "active" : ""}`}
                onClick={() => switchTable("mahadasha")}
              >
                Mahadasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "antardasha" ? "active" : ""}`}
                onClick={() => switchTable("antardasha")}
              >
                Antardasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "paryantardasha" ? "active" : ""}`}
                onClick={() => switchTable("paryantardasha")}
              >
                Paryantardasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "shookshamadasha" ? "active" : ""}`}
                onClick={() => switchTable("shookshamadasha")}
              >
                Shookshamadasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "pranadasha" ? "active" : ""}`}
                onClick={() => switchTable("pranadasha")}
              >
                Pranadasha
              </button>
            </li>
          </ul>
          {activeTable === "mahadasha" && (
            <Table title="Mahadasha" data={dashaperiod.data.major.dasha_period} />
          )}
          {activeTable === "antardasha" && (
            <Table2 title="Antardasha" data={dashaperiod.data.minor.dasha_period} />
          )}
          {activeTable === "paryantardasha" && (
            <Table2 title="Paryantardasha" data={dashaperiod.data.sub_minor.dasha_period} />
          )}
          {activeTable === "shookshamadasha" && (
            <Table2 title="Shookshamadasha" data={dashaperiod.data.sub_sub_minor.dasha_period} />
          )}
          {activeTable === "pranadasha" && (
            <Table2 title="Pranadasha" data={dashaperiod.data.sub_sub_sub_minor.dasha_period} />
          )}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
    );
}


const Table = ({ title, data }) => (
    <div>
      <h3>{title}</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Planet Id</th>
            <th>Planet</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((dasha, index) => (
            <tr key={index}>
              <td>{dasha.planet_id}</td>
              <td>{dasha.planet}</td>
              <td>{dasha.start_date}</td>
              <td>{dasha.end_date}</td>
              <td>{dasha.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


  const Table2 = ({ title, data }) => (
    <div>
      <h3>{title}</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Planet Id</th>
            <th>Planet</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((dasha, index) => (
            <tr key={index}>
              <td>{dasha.planet_id}</td>
              <td>{dasha.planet}</td>
              <td>{dasha.start_date}</td>
              <td>{dasha.end_date}</td>
              <td>
                {`${dasha.duration.year} years, ${dasha.duration.month} months, ${dasha.duration.day} days, ${dasha.duration.hour} hours, ${dasha.duration.min} minutes, ${dasha.duration.sec} seconds`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
export default ApiReport;