import React from 'react';
import {Chart} from 'react-google-charts';
import './App.css'

export const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
    "Madagascar",
    "Papua New Guinea",
    "Rwanda",
    "Average",
  ],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const options = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

const Dashboard = () => {
  return (
    
    <div className="Main" style={{color:'whitesmoke',}}>
      <h1>Dashboard</h1>
      <div className='cards'>
        <div className="card" style={{backgroundColor:"cadetblue"}}>
  <h3>Weekly Sales</h3>
<h2>$ 15,0000</h2><br/>
<h3>Increased by 60%</h3>
</div>
        <div className="card" style={{backgroundColor:"cadetblue"}}>
  <h3>Weekly Orders</h3>
<h2>45,6344</h2><br/>
<h3>decreased by 10%</h3>
</div>
        <div className="card" style={{backgroundColor:"cadetblue"}}>
  <h3>Visitors Online</h3>
<h2>95,476</h2><br/>
<h3>Increased by 5%</h3>
</div>
      </div>

      <div className="graph" style={{marginLeft:"10px"}}>
      <Chart
      chartType="ComboChart"
      width="1300px"
      height="500px"
      data={data}
      options={options}
    />
      </div>
    </div>
  )
}

export default Dashboard;