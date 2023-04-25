import "./App.css";
import SideBar from "./Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users/User";
import Role from "./Role";
import Update from "./Analytics";
import Order from "./Order";
import Saved from "./Saved";
import Nav from "./Nav";
import Adduser from "./Users/Adduser";
import Updateuser from "./Updateuser";
import Productcate from "./Productcate";
import Productsubcate from "./Productsubcate";


function App() {
  return (
    <Router>
        
      <Nav/>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Users/user" element={<Users />} />
           <Route path="ProductCategory" element={<Productcate />} />
           <Route path="Productscate" element={<Productsubcate/>}/>
           <Route path="/Users/Adduser" element={<Adduser/>} />
           <Route path="/Role" element={<Role/>} />
           <Route path="/Update" element={<Update />} />
           <Route path="/order" element={<Order />} />
           <Route path="/saved" element={<Saved />} />
           <Route path="/updateuser" element={<Updateuser/>}/>
          
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;