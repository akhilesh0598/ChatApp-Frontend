import React from "react";
import Search from "./Search";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            <div className='input-group border-1'>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="button" onClick={(e)=>console.log(e.target)}>Search</button>
            </div>
        </div>
        <div className="col">
            Column
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
