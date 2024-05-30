import React from 'react';
import licenseAppImage1 from './licenseApp.png';
import licenseAppImage2 from './licenseApp2.png';
import licenseAppImage3 from './licenseApp3.jpeg';

const Main = () => {
  return (
    <div className="main-container">
      <div className="image-wrapper">
        <img src={licenseAppImage2} alt="" />
        <img src={licenseAppImage1} alt="" />
        <img src={licenseAppImage3} alt="" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>15</td>
            <td>10:00 AM</td>
            <td>Peter Smith</td>
          </tr>
          <tr>
            <td>February</td>
            <td>20</td>
            <td>11:30 AM</td>
            <td>Zach Mor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Main;
