import React, { Component } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import ChartComponent from './chart/chart';
import { motion } from "framer-motion"


function Dashboard() {
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('private_key');
    navigate('/');
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
    <motion.div>
      <div className="top-bar">
    <div className="logout_but"> <p className="logout_btn_text">Log out</p> </div>
    </div>
        
    <div className="content">
      <h1>Dashboard</h1>
      <ChartComponent type="line" data={chartData} options={chartOptions} />
    </div>
    
    <Sidebar />
    
    </motion.div>
    
  );
}

export default Dashboard;
        