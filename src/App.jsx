import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Prokeral from "./prokeral" ;
import Astrology from "./Astrology";
import VedicAstro from "./VedicAstro";
import ApiReport from "./ApiReport";
import Navbar from "./Navbar";
 
function App() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/first" element={<Prokeral/>}/>
        <Route path="/astrology" element={<Astrology/>}/>
        <Route path="/vedicastro" element={<VedicAstro/>}/>
        <Route path="/apireport" element={<ApiReport/>}/>
      </Routes>
    </BrowserRouter>
    );
}
 
export default App;



// import React from 'react';
// import DashaPeriodsTable from './DashaPeriodsTable';

// const App = () => {
//   return (
//     <div>
//       <h1>Astrology Dasha Periods</h1>
//       <DashaPeriodsTable />
//     </div>
//   );
// };

// export default App;
