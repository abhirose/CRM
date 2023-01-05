import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function TaskList() {
	const [tasks, setTasks] = useState([]);
	const tasksCollectionRef = collection(db, "tasks");
  
	const updateTask = async (id, age) => {
	  const tasksDoc = doc(db, "tasks", id);
	  const newFields = {age: age + 1};
	  await updateDoc(tasksDoc, newFields);
	}
  
	const deleteTask = async (id) => {
	  const tasksDoc = doc(db, "tasks", id);
	  await deleteDoc(tasksDoc);
		window.location.reload();
	}
  
	useEffect(() => {
	  
	  const getTasks = async () => {
		const data = await getDocs(tasksCollectionRef);
		setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
	  }
  
	  getTasks()
	}, [])
  
	return (
	  <div className="App">
				<label class="divLabel">Name</label>
				<label class="divLabel">Date</label>
				<label class="divLabel">Priority</label>
				{/* <label class="divLabel">Status</label> */}
				<label class="divLabel">Task</label>
			{tasks.map((tasks) => {
			return ( 
				<div>
					<br/><br/>
					<task>{tasks.customer}</task>
					<task>{tasks.date}</task>
					<task>{tasks.priority}</task>
					{/* <task>{tasks.status}</task>  */}
					<task>{tasks.task}</task> 
					<button type="button" onClick={
					() => {deleteTask(tasks.id)}}>
					Delete Task
					</button>
				</div>
			);
			})}
	  </div>
	);
}

export default TaskList