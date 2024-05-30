import React from 'react';
import licenseAppImage1 from './licenseApp.png';
import licenseAppImage2 from './licenseApp2.png';
import licenseAppImage3 from './licenseApp3.jpeg';

const Main = () => {
  const imageStyle = {
    width: 'auto',
    height: '250px'
  };
  const tableStyle = {
    margin: 'auto',
    marginTop: '50px',
    borderCollapse: 'collapse',
    width: '50%'
  };

  const cellStyle = {
    border: '2px solid black',
    padding: '8px',
    textAlign: 'center'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-around', width: '100%' }}>
        <img src={licenseAppImage2} alt="Image 1" style={imageStyle} />
        <img src={licenseAppImage1} alt="Image 2" style={imageStyle} />
        <img src={licenseAppImage3} alt="Image 3" style={imageStyle} />
      </div>
      <table style={tableStyle}>
        <thead style={{ border: '2px solid black'}}>
          <tr>
            <th style={cellStyle}>Month</th>
            <th style={cellStyle}>Day</th>
            <th style={cellStyle}>Time</th>
            <th style={cellStyle}>DMV Staff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>January</td>
            <td style={cellStyle}>15</td>
            <td style={cellStyle}>10:00 AM</td>
            <td style={cellStyle}>Peter Smith</td>
          </tr>
          <tr>
            <td style={cellStyle}>February</td>
            <td style={cellStyle}>20</td>
            <td style={cellStyle}>11:30 AM</td>
            <td style={cellStyle}>Zach Mor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Main;
