import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';

function Categorypage(){
	var [chinesedata,setchinesedata]=useState()
	var [indiandata,setindiandata]=useState()
	const params=useParams();
	var categoryselected=params.category
	var [indianproduct,setindianproduct]=useState(false)
	var [chineseproduct,setchineseproduct]=useState(false)
	var [loading,setloading]=useState(false)

	useEffect(()=>{
			
		firebase.database().ref("Products").child("Chinese").on('value',(snapshot)=>{setchinesedata(snapshot.val())})
		firebase.database().ref("Products").child("Indian").on('value',(snapshot)=>{setindiandata(snapshot.val())})
	},[])
	
	useEffect(()=>{
		if(chinesedata!==undefined&&indiandata!==undefined)
		{
			for(let i in chinesedata){
				if(i==categoryselected)
				setchineseproduct(true)
			}
			for(let i in indiandata){
				if(i==categoryselected)
				setindianproduct(true)
			}
			setloading(true)
		}
		
	},[chinesedata,indiandata])

function Renderindian(){
	let temp=indiandata[categoryselected]
	let list=[]
	for(let i in temp)
	{
		let x=[]
		for(let j in temp[i])
		x.push(temp[i][j])
		list.push({brandname:i,products:x})
	}
	console.log(list)
	return(<div>{list.map((s)=>(
				<div>
					<h2>{s.brandname}</h2>
					{s.products.map((key)=>(
					<div>
						<li><a href={key.ProductLink} target="_blank">{key.ProductName}</a></li>
					</div>
					))}
			</div>
			))}
		
	</div>)
	
}

function Renderchinese(){
	let temp=chinesedata[categoryselected]
	let list=[]
	for(let i in temp)
	{
		let x=[]
		for(let j in temp[i])
		x.push(temp[i][j])
		list.push({brandname:i,products:x})
	}
	console.log(list)
	return(<div>{list.map((s)=>(
				<div>
					<h2>{s.brandname}</h2>
					{s.products.map((key)=>(
					<div>
						<li><a href={key.ProductLink} target="_blank">{key.ProductName}</a></li>
					</div>
					))}
			</div>
			))}
		
	</div>)
	
}
if(loading==true)
	return(<div style={{marginTop:'25px',paddingTop:'25px'}}>
		{/* <div style={{diplay:'flex',flexDirection:'row'}}>
			<div style={{width:'50%'}}>
				<h1 style={{display:'inline'}}>Indian</h1>
			</div>
			<div style={{width:'50%',float:'right'}}>
				<h1 style={{display:'inline'}}>chinese</h1>
			</div>
		</div> */}
		<div>
			
				<h1 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>{categoryselected}</h1>
				<div style={{diplay:'flex',flexDirection:'row'}}>
					<div className="col-lg-6">
					{(indianproduct==true)?Renderindian():<h1>No products</h1>}
					</div>
					<div className="col-lg-6">
					{(chineseproduct==true)?Renderchinese():<h1>No products</h1>}
					</div>
				</div>
				
		</div>
		
			
	</div>)
else
return(<div style={{width:'400px',height:'400px'}}>
<LoopCircleLoading />
{/* <WindMillLoading /> */}
</div>)
}

export default Categorypage;

