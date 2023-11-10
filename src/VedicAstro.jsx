import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetailsForm2 from "./UserDetailsForm2";


const VedicAstro = () => {
  const [dashaperiod, setDashaperiod] = useState(null);
  const [userDetails,setUserDetails]=useState(null);
  const [activeTable,setActiveTable]=useState("mahadasha");

  useEffect(() => {
     console.log("userDetails:",userDetails);

    if(userDetails){
    const apiUrl = `https://api.vedicastroapi.com/v3-json/dashas/current-mahadasha-full?dob=${userDetails.day}/${userDetails.month}/${userDetails.year}&tob=${userDetails.hour}:${userDetails.min}&lat=${userDetails.lat}&lon=${userDetails.lon}&tz=${userDetails.tzone}&api_key=de196566-0946-5e6b-b9b6-2190d3ab9bff&lang=en`;

    axios
      .get(apiUrl)
      .then((response) => {
        setDashaperiod(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
  }, [userDetails]);

  function switchTable(table){
    setActiveTable(table)
  }

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    console.log(userDetails);
   };
  
  console.log(dashaperiod)
  return (
    <div className="mainContainerSignup">
      { userDetails ? (
        <>
        <h1 className="text-white">VedicAstro</h1>
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
            <li className="nav-item">
              <button
                className={`nav-link ${activeTable === "extrainfo" ? "active" : ""}`}
                onClick={() => switchTable("extrainfo")}
              >
                Extra Info
              </button>
            </li>
          </ul>
          {dashaperiod && dashaperiod.response ? (
            <>
            {activeTable === "mahadasha" && (
            <Table title=" Mahadasha" data={dashaperiod.response.mahadasha} />
          )}
           {activeTable === "antardasha" && (
                <Table title=" Antardasha" data={dashaperiod.response.antardasha} />
           )}
           {
            activeTable === "paryantardasha" && (
                <Table title=" Paryantardasha" data={dashaperiod.response.paryantardasha} />
            )}

           {
            activeTable === "shookshamadasha" && (
                <Table title=" Shookshamadasha" data={dashaperiod.response.Shookshamadasha} />
            )
           }
           {  
             activeTable === "pranadasha" && (
                    <Table title=" Pranadasha" data={dashaperiod.response.mahadasha} />
                )     
           }
           {
            activeTable === "extrainfo" && (
                <>
                <Table title="Major Dasha" data={[dashaperiod.response.order_of_dashas.major]} />
                <Table title="Minor Dasha" data={[dashaperiod.response.order_of_dashas.minor]} />
                <Table title="Sub Minor Dasha" data={[dashaperiod.response.order_of_dashas.sub_minor]} />
                <Table title="Sub Sub Minor Dasha" data={[dashaperiod.response.order_of_dashas.sub_sub_minor]} />
                </>
            )
           }
            </>
          ):(
            <p>Loading...</p>
          )
            }
          </>
      ) 
      : (
       <UserDetailsForm2 onSubmit={handleUserDetailsSubmit} />
      )}
    </div>
  );
};


const Table = ({ title, data }) => {
    return (
      <div>
        <h2 className="text-white">{title} Periods</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Planet</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {data.map((period, index) => (
              <tr key={index}>
                <td>{period.name}</td>
                <td>{period.start}</td>
                <td>{period.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default VedicAstro;
