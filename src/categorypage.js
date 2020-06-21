import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import { Card } from 'reactstrap';

function Categorypage(props){
	var indiandata=props.indiandata
	var chinesedata=props.chinesedata
	const params=useParams();
	var categoryselected=params.category
	var [indianproduct,setindianproduct]=useState(false)
	var [chineseproduct,setchineseproduct]=useState(false)
	var [loading,setloading]=useState(false)


	
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
	return(<div>{list.map((s)=>(
					<div style={{margin:'5%'}}>
						<div style={{border:'2px solid green',width:'50%',marginLeft:'25%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}><h3>{s.brandname}</h3></div>
						<Card style={{border:'2px solid green'}}>
						{s.products.map((key)=>(
						<div>
							<li><a href={key.ProductLink} target="_blank">{key.ProductName}</a></li>
						</div>
						))}
						</Card>
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
	return(<div>{list.map((s)=>(
				<div style={{margin:'5%'}}>
					<div style={{border:'2px solid green',width:'50%',marginLeft:'25%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}><h3>{s.brandname}</h3></div>
					<Card style={{border:'2px solid green'}}>
					{s.products.map((key)=>(
					<div>
						<li><a href={key.ProductLink} target="_blank">{key.ProductName}</a></li>
					</div>
					))}
					</Card>
			</div>
			))}
		
	</div>)
	
}
if(loading==true)
	return(<div style={{marginTop:'19vh'}}>
			<div class="center">
  				<h1>{categoryselected}</h1>
			</div>
			
			<div style={{marginTop:'18vh',marginLeft:'10%',marginRight:'10%',border:'2px solid red',float:'left',width:'80%'}}>
				<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',marginTop:'5%',marginLeft:'5%',marginRight:'5%',border:'2px solid red'}}>
						<h3 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Indian brands</h3>
					</div>
					<div style={{width:'50%',marginTop:'5%',marginLeft:'5%',marginRight:'5%',border:'2px solid red'}}>
						<h3 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Chinese brands</h3>
					</div>
				</div>
				<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',marginTop:'5%',marginLeft:'5%',marginRight:'5%'}}>
					{(indianproduct==true)?Renderindian():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
					<div style={{width:'50%',marginTop:'5%',marginLeft:'5%',marginRight:'5%'}}>
					{(chineseproduct==true)?Renderchinese():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
				</div>
			</div>
		
			
	</div>)
else
return(<div>
<LoopCircleLoading />
</div>)
}

export default Categorypage;

