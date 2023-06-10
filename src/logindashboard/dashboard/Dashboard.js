import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import ChartComponent from '../chart/chart';
import { motion } from "framer-motion"
import SubmissionTable from './SubmissionTable/SubmissionTable';
import {Component, useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import TargetVisual from './TargetVisual/TargetVisual';



function Dashboard() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(null);
  const [fundingData, setFundingData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  function handleLogout() {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('private_key');
    navigate('/login');
  }
  
  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date('07/15/2023');

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown display
      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the countdown state
      setCountdown(countdownString);

      // Clear the interval when the target date is reached
      if (distance <= 0) {
        clearInterval(interval);
      }
    }, 1000);

      // Simulated API call to fetch funding data
      const fetchFundingData = () => {
        // Mock data for demonstration
        const data = [
          { country: 'Austria', project: 'Solar Power Plant', amount: '$5 million' },
          { country: 'Italy', project: 'Wind Farm Development', amount: '$8 million' },
          { country: 'Germany', project: 'Energy Efficiency Retrofit', amount: '$3 million' },
          { country: 'France', project: 'Transport Electrification', amount: '$6 million' },
        ];
  
        // Set the funding data state
        setFundingData(data);
      };
  
      // Call the fetchFundingData function
      fetchFundingData();


    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const targets = ['Reduce GHG emissions', 'Increase renewable energy usage', 'Improve energy efficiency'];
  const achievements = [75, 50, 90];

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

  const numberInEUR = 1000000;
  return (
    <motion.div className="DashboardMain"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ ease: "easeOut", duration: 0.5 }}>

      <div className="maincontent">
          <h1>Dashboard</h1>
          <div className="countdown">
            <h3>Countdown to next global stocktake</h3>
            <h3>07/15/2023</h3>
            <h3 className='countdown-timer'>{countdown}</h3>
          </div>

        <div className="visualization-card">
            <h2>Total allocation</h2>
            <p>{numberInEUR.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}</p>
        </div>
        <SubmissionTable/>
        <div className="funding-table">
          <h2>Funding Details</h2>
          <table>
            <thead>
              <tr>
                <th>Funding Country</th>
                <th>Funded Project</th>
                <th>Funds</th>
              </tr>
            </thead>
            <tbody>
              {fundingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.country}</td>
                  <td>{item.project}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="calendar">
          <h2>Calendar</h2>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar"
          />
        </div>
        <div>
            <h1>Progress Towards Targets</h1>
            <TargetVisual targets={targets} achievements={achievements} />
        </div>
      </div>
    </motion.div>
    
  );
}

export default Dashboard;
        