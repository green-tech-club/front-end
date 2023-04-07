import React, { Component } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import ChartComponent from './chart/chart';
import { motion } from "framer-motion"


function Dashboard() {
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('private_key');
    navigate('/login');
  }

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5]
      },
      {
        label: 'Dataset 2',
        data: [2, 3, 4, 5, 6]
      }
    ]
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <motion.div className="DashboardMain"
    initial={{ opacity: 0 , x:20}}
    animate={{ opacity: 1 , x:0 }}
    transition={{ ease: "easeOut", duration: 0.5 }}>

      <div className="top-bar">
        <button className="logout_but" onClick={handleLogout}> <p className="logout_btn_text">Log out</p> </button>
      </div>

      <div className='DashboardDivider'>
        <Sidebar />
        <div className="maincontent">
          <h1>Dashboard</h1>
          <ChartComponent className="chart" type="line" data={chartData} options={chartOptions} />
        </div>
        
      </div>
    </motion.div>
    
  );
}

export default Dashboard;
        