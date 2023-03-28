import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './sidebar/Sidebar';
import Highcharts from 'highcharts';

class Dashboard extends Component {
  componentDidMount() {
    Highcharts.chart('chart-container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sample Chart'
      },
      series: [{
        data: [1, 2, 3, 4, 5]
      }]
    });
  }

  render() {
    return (
      <div className="dashboard">
        <Sidebar username={this.props.username} />
        <div className="main-content">
          <div id="chart-container"></div>
        </div>
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>
    );
  }
}

  export default Dashboard;