import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/home.css"
import TaskList from './TaskList';
import CustomerList from './CustomerList';
const Home = () => {
	

	return (
		<>
			{/* <div class="homeDiv">
				<label class="divLabel">Customers</label>
				<CustomerList />
			</div> */}
			<div class="homeDiv">
				<label class="divLabel">Tasks</label>
				<TaskList />
			</div>

		
		</>
	)
};

export default Home;
