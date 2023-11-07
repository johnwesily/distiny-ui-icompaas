import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashaTableformate from './Dasatable2format';

const DashaPeriodsTable2= () => {
  const [dashaPeriods, setDashaPeriods] = useState({});
  const [loading, setLoading] = useState(true);

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
      .post('https://json.astrologyapi.com/v1/current_vdasha', requestData, {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>Dasha Periods</h2>
      <div className="container">
      <DashaTableformate period={dashaPeriods.major} title="Major" />
      <DashaTableformate period={dashaPeriods.minor} title="Minor" />
      <DashaTableformate period={dashaPeriods.sub_minor} title="Sub Minor" />
      <DashaTableformate period={dashaPeriods.sub_sub_minor} title="Sub Sub Minor" />
      <DashaTableformate period={dashaPeriods.sub_sub_sub_minor} title="Sub Sub Sub Minor" />
    </div>
    </div>
  );
};

export default DashaPeriodsTable2;
