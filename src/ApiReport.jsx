import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetailsForm from "./UserDetailsForm";


const ApiReport=()=>{
   const [dashaperiod,setDashaperiod]=useState(null);
   const [activeTable,setActiveTable] =useState("mahadasha")
   const [userDetails, setUserDetails] = useState(null);

   useEffect(()=>{
    console.log("userDetails:", userDetails);
    if(userDetails){
    const basicAuth = btoa('687:a64c738021fe07be8992423b6978d448');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${basicAuth}`,
      'Accept-Language':"en",
         
    };

      axios
      .post('https://json.apireports.com/v1/current_vdasha_all',  { ...userDetails }, {
        headers: headers,
      })
      .then((response) => {
        setDashaperiod(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        
      });
    }
   },[userDetails])
   
   console.log(dashaperiod);
 

   const handleUserDetailsSubmit = (details) => {
        setUserDetails(details);
        console.log(userDetails);
       };

   function switchTable(table){
    setActiveTable(table)
   }

    return (
        <div>
      {   userDetails ? (
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
          { dashaperiod && dashaperiod.data ? (
            <>
          {activeTable === "mahadasha" && dashaperiod.data.major && (
            <Table title="Mahadasha" data={dashaperiod.data.major.dasha_period} />
          )}
          {activeTable === "antardasha" && dashaperiod.data.minor && (
            <Table2 title="Antardasha" data={dashaperiod.data.minor.dasha_period} />
          )}
          {activeTable === "paryantardasha" && dashaperiod.data.sub_minor && (
            <Table2 title="Paryantardasha" data={dashaperiod.data.sub_minor.dasha_period} />
          )}
          {activeTable === "shookshamadasha" && dashaperiod.data.sub_sub_minor && (
            <Table2 title="Shookshamadasha" data={dashaperiod.data.sub_sub_minor.dasha_period} />
          )}
          {activeTable === "pranadasha" && dashaperiod.data.sub_sub_sub_minor &&(
            <Table2 title="Pranadasha" data={dashaperiod.data.sub_sub_sub_minor.dasha_period} />
          )}
          </>
          ):(
            <p>Loading...</p>
          )}
        </div>
      ) : (
         <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
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
