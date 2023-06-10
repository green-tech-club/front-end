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
import WholeDashboard from './logindashboard/WholeDashboard'
import LoginPage from "./loginpage/LoginPage";
import DonatePage from './donatepage/donate';
import SignUpPage from "./signuppage/SignUpPage";
import ParisA from  "./parisagreement/parisagreement";
import PreSignUp from './signuppage/PreSignUp';
import ContactPage from './contactpage/ContactPage';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StatisticsPage from './statistticspage/statistics';

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
    element: <WholeDashboard/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "signup-code",
    element: <PreSignUp/>,
  },
  {
    path: "signup",
    element: <SignUpPage/>,
  },
  {
    path: "donate",
    element: <DonatePage/>,
  },
  {
    path: "paris-agreement",
    element: <ParisA/>,
  },
  {
    path: "signup/:code/",
    element: <SignUpPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
  {
    path:"stats",
    element: <StatisticsPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

