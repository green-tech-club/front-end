import React from 'react';
import './WholeDashboard.css';
import SidebarTwo from './sidebar/sidebartwo';
import Dashboard from './dashboard/Dashboard';
import FormSubmittingPage from "./formsubmittingpage/FormSubmittingPage";

function WholeDashboard() {
    const [page, setPage] = React.useState("Dashboard");
    const setNewPage = (newPage) => {
        console.log(newPage);
        setPage(newPage);
    };

    return (
        <div id="whole-dashboard">
            <SidebarTwo newPage={setNewPage}/>
            {
                page === "Dashboard" ? <Dashboard /> : null
            }
            {
                page === "Form" ? <FormSubmittingPage /> : null
            }
        </div>
    );
}
export default WholeDashboard;