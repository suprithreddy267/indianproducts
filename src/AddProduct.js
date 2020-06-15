import React, { Component, useEffect, useState } from 'react';
import firebase from './Firebase';

function AddProduct(){

	var [category,setcategory]=useState()
	var [country,setcountry]=useState()
	var [brandname,setbrandname]=useState()	
	var [disabled,setdisabled]=useState(true)	
	var [productname, setproductname] = useState() 
    var [plink, setplink] = useState() 


	const storeData = () => {
        var currentref = firebase.database().ref().child('Products').child(country).child(category).child(brandname);
        var newkey = currentref.push().key;
        console.log("data", country, category, brandname, productname, plink, newkey);
        currentref.child(newkey).set({
            ProductName: productname,
            ProductLink: plink
        }, function(error) {
            if (error) {
                console.log("Error occured", error);
            } else {
                console.log("")
            }
        });
    }

	return(<div style={{padding:'40px'}}>
		<select onChange={(e)=>{setcountry(e.target.value),setdisabled(false)}}>
			<option>select country</option>
			<option value="Indian">India</option>
			<option value="Chinese">China</option>
			<option value="Other">Other</option>
		</select>
		<br/>
		<input type="text" id="cat" onChange={(e)=>{setcategory(e.target.value),setdisabled(false)}} placeholder="type category"></input>
		<br/>
		<input type="text" id="pname" onChange={(e)=>{setproductname(e.target.value)}} placeholder="Product Name"></input>
		<input type="text" id="pcat" onChange={(e)=>{setbrandname(e.target.value)}} placeholder="Brandname"></input>
		<input type="text" id="plink" onChange={(e)=>{setplink(e.target.value)}} placeholder="Link"></input > 

		<button disabled={disabled} onClick={() => storeData()}>Submit</button>
	</div>)
}

export default AddProduct;

