import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";



const Astrology= ()=>{

    const [dashaPeriods, setDashaPeriods] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTable,setActiveTable]=useState("mahadasha");

  useEffect(() => {
    const basicAuth = btoa('626556:78c6c49ddbe16d6268fb807f5ca83e1c');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${basicAuth}`,
    };

    const requestData = {
      day: 17,       // Replace with the actual day of birth
      month: 8,      // Replace with the actual month of birth
      year: 1997,    // Replace with the actual year of birth
      hour: 16,      // Replace with the actual hour of birth
      min: 40,       // Replace with the actual minute of birth
      lat: 18.8714,  // Replace with the actual latitude
      lon: 79.4443,  // Replace with the actual longitude
      tzone: 5.5,    // Replace with the actual timezone
    };

    axios
      .post('https://json.astrologyapi.com/v1/current_vdasha_all', requestData, {
        headers: headers,
      })
      .then((response) => {
        setDashaPeriods(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

  }, []);

  console.log(dashaPeriods);

  function switchTable(table){
    setActiveTable(table);
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : dashaPeriods ? (
        <div>
          <h1>Astrology </h1>
          
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
          {activeTable ==="mahadasha" && (
            <Table title="Mahadasha" data={dashaPeriods.major.dasha_period} />
          )}
          {
            activeTable === "antardasha" && (
              <Table title="Antardasha" data={dashaPeriods.minor.dasha_period} />
            )}
          {
            activeTable === "paryantardasha" && (
              <Table title="Paryantardasha" data={dashaPeriods.sub_minor.dasha_period} />
            )
          }
          {
            activeTable === "shookshamadasha" && (
              <Table title="Shookshamadasha" data={dashaPeriods.sub_sub_minor.dasha_period} />
            )
          }
          {
            activeTable === "pranadasha" && (
              <Table title="Pranadasha" data={dashaPeriods.sub_sub_sub_minor.dasha_period} />
            )
          }

        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};


export default  Astrology;