import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashaPeriodsTable = () => {
  const [dashaPeriods, setDashaPeriods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to your local API instead of the Prokerala API
    axios
      .get('http://localhost:3001/api') // Update the URL to match your local API endpoint
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
  console.log(dashaPeriods.data.dasha_periods)

  const dasha_periods_array=dashaPeriods.data.dasha_periods


  return (
    <div className="container">
      <h2>Dasha Periods</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
        {dasha_periods_array.map((period, index) => (
            <tr key={index}>
              <td>{period.id}</td>
              <td>{period.name}</td>
              <td>{new Date(period.start).toUTCString()}</td>
              <td>{new Date(period.end).toUTCString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashaPeriodsTable;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DashaPeriodsTable = () => {
//   const [dashaPeriods, setDashaPeriods] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [accessToken, setAccessToken] = useState('');

//   useEffect(() => {
//     // Step 1: Obtain an access token
//     const clientID = '<YOUR_CLIENT_ID>';
//     const clientSecret = '<YOUR_CLIENT_SECRET>';
//     const tokenEndpoint = 'https://api.prokerala.com/token';

//     const tokenData = `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`;

//     axios
//       .post(tokenEndpoint, tokenData, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       })
//       .then((response) => {
//         setAccessToken(response.data.access_token);

//         // Step 2: Use the access token to make a GET request
//         const dashaEndpoint = 'https://api.prokerala.com/v2/astrology/dasha-periods';

//         axios
//           .get(dashaEndpoint, {
//             headers: {
//               Authorization: `Bearer ${response.data.access_token}`,
//             },
//             params: {
//               ayanamsa: 3,
//               coordinates: '15.9129,79.7400',
//               datetime: '2023-10-25T12:34:34.918Z',
//             },
//           })
//           .then((response) => {
//             setDashaPeriods(response.data.data.dasha_periods);
//             setLoading(false);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//             setLoading(false);
//           });
//       })
//       .catch((error) => {
//         console.error('Error obtaining access token:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     // Render your Dasha Periods table here
//   );
// };

// export default DashaPeriodsTable;


// const [dashaPeriods, setDashaPeriods] = useState([]);
// const [loading, setLoading] = useState(true);
// const [accessToken, setAccessToken] = useState('');

// useEffect(() => {
//   // Step 1: Obtain an access token
//   const clientID = '918a8fc0-db14-45e5-ac9e-c51c10a11eae';
//   const clientSecret = 'fLZ0XBbJ82Tur3Sn0P3bm0GBNlcr0TB8GPgdUxQq';
//   const tokenEndpoint = 'https://api.prokerala.com/token';

//   const tokenData = `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`;

//   axios
//     .post(tokenEndpoint, tokenData, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })
//     .then((response) => {
//       setAccessToken(response.data.access_token);

//       // Step 2: Use the access token to make a GET request
//       const dashaEndpoint = 'https://api.prokerala.com/v2/astrology/dasha-periods';
     
//       console.log(response.data.access_token);

//       axios
//         .get(dashaEndpoint, {
//           headers: {
//             Authorization: `Bearer ${response.data.access_token}`,
//           },
//           params: {
//             ayanamsa: 3,
//             coordinates: '15.9129,79.7400',
//             datetime: '2023-10-25T12:34:34.918Z',
//           },
//         })
//         .then((response) => {
//           setDashaPeriods(response.data.data.dasha_periods);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setLoading(false);
//         });
//     })
//     .catch((error) => {
//       console.error('Error obtaining access token:', error);
//       setLoading(false);
//     });
// }, []);



// import React, { useEffect, useState } from 'react';
// import { ApiClient, ApiError, ValidationError, AuthenticationError, ServerError } from './client'; 

// const DashaPeriodsTable = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const clientId = '918a8fc0-db14-45e5-ac9e-c51c10a11eae';
//       const clientSecret = 'fLZ0XBbJ82Tur3Sn0P3bm0GBNlcr0TB8GPgdUxQq';
  
//       const client = new ApiClient(clientId, clientSecret);
  
//       const fetchData = async () => {
//         try {
//           const response = await client.get('v2/astrology/panchang', {
//             'ayanamsa': 1,
//             'coordinates': '23.1765,75.7885',
//             'datetime': '2020-10-19T12:31:14+00:00',
//           });
  
//           setData(response);
//         } catch (error) {
//           // Handle specific API errors
//           if (error instanceof ApiError) {
//             if (error instanceof ValidationError) {
//               console.error('Validation error:', error.getValidationMessages());
//             } else if (error instanceof AuthenticationError) {
//               console.error('Authentication error:', error.message);
//             } else if (error instanceof ServerError) {
//               console.error('Server error:', error.message);
//             } else {
//               console.error('API error:', error.message);
//             }
//           } else {
//             // Handle generic errors
//             console.error('Error fetching data:', error);
//           }
  
//           setError(error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <div>
//         <h1>Your React Component</h1>
//         {data ? (
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         ) : error ? (
//           <p>Error: {error.message}</p>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }