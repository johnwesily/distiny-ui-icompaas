import React from "react";
import DashaPeriodsTable2 from "./dasaTable2";

const Home= ()=>{

    return (
        <div className="App">
           <div className="mainContainerSignup">
           <h1>Astrology Dasha Periods</h1>
             {/* <DashaPeriodsTable /> */}
             <DashaPeriodsTable2/>
          </div>
        </div>

    );
}


export default Home;
