import axios from "axios";
import React, { useEffect, useState } from "react";


const VedicAstro = () => {
  const [dashaperiod, setDashaperiod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTable,setActiveTable]=useState("mahadasha");

  useEffect(() => {
    const apiUrl = `https://api.vedicastroapi.com/v3-json/dashas/current-mahadasha-full?dob=17/08/1997&tob=16:40&lat=18.8714&lon=79.4443&tz=5.5&api_key=de196566-0946-5e6b-b9b6-2190d3ab9bff&lang=en`;

    axios
      .get(apiUrl)
      .then((response) => {
        setDashaperiod(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function switchTable(table){
    setActiveTable(table)
  }
  
  console.log(dashaperiod)
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : dashaperiod ? (
        
        <>
        <h1>VedicAstro</h1>
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
      ) 
      : (
        <p>No data available.</p>
      )}
    </div>
  );
};


const Table = ({ title, data }) => {
    return (
      <div>
        <h2>{title} Periods</h2>
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
