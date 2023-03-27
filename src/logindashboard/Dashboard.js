import React from 'react';
import './Dashboard.css';;

function Dashboard() {
    return (
      <div className="dashboard">
        <h1>Welcome to the Dashboard!</h1>
        <p>This is where you can manage your app's settings and data.</p>
        <button className="btn">Get started</button>
      </div>
    );
  }

  export default Dashboard;