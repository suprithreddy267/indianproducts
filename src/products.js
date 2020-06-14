import React, { useEffect, useState } from 'react';
import firebase from './Firebase';

function Products(){
	var [data,setdata]=useState()

	useEffect(()=>{
			
		firebase.database().ref("Products").on('value',(snapshot)=>{setdata(snapshot.val())})
	},[])
	
	useEffect(()=>{
		// if(data!==undefined)
		// {

		// 	var list

		// 	for(let i in data)
		// 	{
		// 		var x=[] 
		// 		for(let j in data[i]){
					
		// 			x[i]=data[i][j]
		// 			list[j].push(x)
					
		// 		}
				
		// 	}
		// 	console.log(list)

		// }
		
	},[data])


	return(<div style={{padding:'40px'}}>
		<h1>hello</h1>
		<h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1><h1>hello</h1>
	</div>)
}

export default Products;

