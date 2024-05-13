import React from 'react';
import './style.css'; // File CSS untuk styling

const JadwalShalat = () => {
  return (
    <div className="jadwal-shalat-container" id="jadwal">
      <h2>Jadwal Shalat</h2>
      <table className="jadwal-shalat-table">
        <thead>
          <tr>
            <th>Waktu</th>
            <th>Jam</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subuh</td>
            <td>04.27</td>
          </tr>
          <tr>
            <td>Dzuhur</td>
            <td>11.42</td>
          </tr>
          <tr>
            <td>Ashar</td>
            <td>15.04</td>
          </tr>
          <tr>
            <td>Maghrib</td>
            <td>17.37</td>
          </tr>
          <tr>
            <td>Isya</td>
            <td>18.49</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JadwalShalat;
