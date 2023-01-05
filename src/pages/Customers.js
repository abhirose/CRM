//Create customer component
import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

function Customers() {
	const [newName, setNewName] = useState("");
	const [newAddress, setNewAddress] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newEmail, setNewEmail] = useState("");
  
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");
  
	const createUser = async () => {
	  await addDoc(usersCollectionRef, {
		name: newName,
		address: newAddress,
		phone: newPhone,
		email: newEmail
	});
		window.location.reload();
	};
  
	const updateUser = async (id, age) => {
	  const userDoc = doc(db, "users", id);
	  const newFields = {age: age + 1};
	  await updateDoc(userDoc, newFields);
	}
  
	const deleteUser = async (id) => {
	  const userDoc = doc(db, "users", id);
	  await deleteDoc(userDoc);
	}
  
	useEffect(() => {
	  
	  const getUsers = async () => {
		const data = await getDocs(usersCollectionRef);
		setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
	  }
  
	  getUsers()
	}, [])
  
	return (
		<div class="formDiv">
            <h1>Create a customer</h1>   
            <form class="taskForm">
							<input class="input" 
							placeholder='Name...'
							onChange={e => {setNewName(e.target.value);}}/>
						<br/>
							<input class="input"
							placeholder='Address...'
							onChange={e => {setNewAddress(e.target.value);}}/>
						<br/>
							<input class="input"
							placeholder='Phone...' 
							onChange={e => {setNewPhone(e.target.value);}}/>
						<br/>
							<input class="input"
							placeholder='Email...'
							onChange={e => {setNewEmail(e.target.value);}}/>
						<br/>
						<br/>
            </form>
						<button type="button" onClick={createUser}>Create User</button>
        </div>	  
	);
}


export default Customers