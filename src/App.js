import React from 'react'
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customers from './pages/Customers';
import CustomerList from './pages/CustomerList';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';

function App() {

  return (
    <div id="wrapper" className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createCustomer' element={<Customers />} />
          <Route path='/customerList' element={<CustomerList />} />
          <Route path='/createTask' element={<CreateTask />}/> 
          {/* We can make tasks list it's own page if we want
              I have commented it out here and in the Navbar index
           <Route path='/taskList' element={<TaskList />}/> */
          }
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
