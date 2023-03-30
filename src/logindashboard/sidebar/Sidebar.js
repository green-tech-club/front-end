import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const username = "Hungary"
const Sidebar = ({ username }) => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <h2>{username}</h2>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

  export default Sidebar;