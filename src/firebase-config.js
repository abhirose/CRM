import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBMLo7x3cQIaphq6xeJrei6TpZCppKh8c8",
	authDomain: "my-app3-acc51.firebaseapp.com",
	projectId: "my-app3-acc51",
	storageBucket: "my-app3-acc51.appspot.com",
	messagingSenderId: "702874023549",
	appId: "1:702874023549:web:c80602f468605e1c616314",
	measurementId: "G-QBS5RXZ6SZ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);