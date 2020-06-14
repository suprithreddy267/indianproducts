import React, { Component, useEffect, useState } from 'react';
import firebase from './Firebase';

function App(){

	var [category,setcategory]=useState()
	var [country,setcountry]=useState()
	var [brandname,setbrandname]=useState()	
	var [submitted,setsubmitted]=useState(false)
	var [disabled,setdisabled]=useState(true)	
	useEffect(()=>{
		if(submitted==true){
			console.log(category,country,brandname)
		firebase
		.firestore()
		.collection("products").doc(category).collection(country).add({brandname:brandname})
		}
		setsubmitted(false)
	
		firebase.database().ref("products").on('value',(snapshot)=>{console.log(snapshot)})
	},[submitted])

	return(<div style={{padding:'40px'}}>
		<label>Category:</label>
		<input type="text" id="cat" onChange={(e)=>{setcategory(e.target.value),setdisabled(false)}} placeholder="type category"></input>
		<br></br>
		<label>Country : </label>
		<select onChange={(e)=>{setcountry(e.target.value),setdisabled(false)}}>
			<option>select country</option>
			<option value="indian">India</option>
			<option value="chineese">China</option>
			<option value="other">Other</option>
		</select>
		<br></br>
		<label>Brandname:</label>
		<input type="text" id="cat" onChange={(e)=>{setbrandname(e.target.value),setdisabled(false)}} placeholder="Brandname"></input>
		
		<button disabled={disabled} onClick={()=>{setsubmitted(true),alert("submitted")}}>Submit</button>
	</div>)
}

export default App;

