
import './App.css';

import EmployeeDetails from './pages/EmployeeDetails';
import Home from "./pages/Home";
import CreateEmp from "./pages/CreateEmp";
import Registration from "./pages/Registration";
import Login from './pages/Login';



import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <div className='navbar'>
        <Link to ="/">Home</Link>
        <Link to ="/employeesList">Employees</Link>
        <Link to ="/employee">Create Employee</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
      </div>
        <Routes>
          <Route exact path="/employeesList" element={<EmployeeDetails/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/employee" element={<CreateEmp/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
