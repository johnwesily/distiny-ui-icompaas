import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import UserDetailsForm from "./UserDetailsForm";
import "../src/styles/index.css" ;



const Astrology= ()=>{

    const [dashaPeriods, setDashaPeriods] = useState(null);
  const [activeTable,setActiveTable]=useState("mahadasha");
  const [UserDetails,setUserDetails]=useState(null);

  useEffect(() => {
     console.log("useDetails:",UserDetails);

    if(UserDetails){
    const basicAuth = btoa('626556:78c6c49ddbe16d6268fb807f5ca83e1c');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${basicAuth}`,
    };

    axios
      .post('https://json.astrologyapi.com/v1/current_vdasha_all',{...UserDetails}, {
        headers: headers,
      })
      .then((response) => {
        setDashaPeriods(response.data);
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
       
      });
    }
  }, [UserDetails])

  console.log(dashaPeriods);

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    console.log(UserDetails);
   };

  function switchTable(table){
    setActiveTable(table);
  }

  return (
    <div className="mainContainerSignup">
      {UserDetails ?  (
        <div>
          <h1 className="text-white">Astrology </h1>
          
          <ul className="nav nav-tab">
            <li className="nav-item">
              <button
                className={`nav-link link-danger ${activeTable === "mahadasha" ? "active" : ""}`}
                onClick={() => switchTable("mahadasha")}
              >
                Mahadasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link link-danger ${activeTable === "antardasha" ? "active" : ""}`}
                onClick={() => switchTable("antardasha")}
              >
                Antardasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link  link-danger ${activeTable === "paryantardasha" ? "active" : ""}`}
                onClick={() => switchTable("paryantardasha")}
              >
                Paryantardasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link link-danger ${activeTable === "shookshamadasha" ? "active" : ""}`}
                onClick={() => switchTable("shookshamadasha")}
              >
                Shookshamadasha
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link link-danger ${activeTable === "pranadasha" ? "active" : ""}`}
                onClick={() => switchTable("pranadasha")}
              >
                Pranadasha
              </button>
            </li>
          </ul>
          {dashaPeriods ? (
          <>
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
          </>
          ):  ( 
             <p> Loading ...</p>
          )
          }

        </div>
      ) : (
        <UserDetailsForm onSubmit={handleUserDetailsSubmit} title="Astrology"/>
      )}
    </div>
  );
};


export default  Astrology;