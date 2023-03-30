import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QAPage from './qa/qa';
import Dashboard from './logindashboard/Dashboard'
import LoginPage from "./loginpage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      
        <App/>
    ),
  },
  {
    path: "faq",
    element: <QAPage/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

