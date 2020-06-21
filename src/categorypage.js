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
						<div style={{border:'2px solid #121371',color:'ivory',width:'50%',marginLeft:'25%'}}><h3>{s.brandname}</h3></div>
						<Card style={{border:'2px solid #121371',height:'auto',width:'auto'}}>
						{s.products.map((key)=>(
							<li style={{padding:'5%'}}><a href={key.ProductLink} target="_blank" style={{color:'ivory',fontSize:'auto',fontWeight:'2px'}}>{key.ProductName}</a></li>
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
	// ,borderTopLeftRadius:'20px',borderTopRightRadius:'20px'
	return(<div>{list.map((s)=>(
				<div style={{margin:'5%'}}>
					<div style={{border:'2px solid #121371',color:'ivory',width:'50%',marginLeft:'25%',textAlign:'center'}}><p style={{fontsize:'auto'}}>{s.brandname}</p></div>
					<Card style={{border:'2px solid #121371',height:'auto',width:'auto'}}>
					{s.products.map((key)=>(
						<li style={{padding:'5%'}}><a href={key.ProductLink} target="_blank" style={{color:'ivory',fontSize:'auto',fontWeight:'2px'}}>{key.ProductName}</a></li>
					))}
					</Card>
			</div>
			))}
		
	</div>)
	
}
if(loading==true)
	return(<div style={{marginTop:'19vh'}}>
			<div class="center">
  				<h1 style={{color:'#1b59ce',fontWeight:'5px'}}>{categoryselected}</h1>
			</div>
			
			<div style={{marginTop:'12vh',marginLeft:'10%',marginRight:'10%',border:'2px solid #1f2ea7',float:'left',width:'80%'}}>
				<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Indian brands</h3>
					</div>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Other brands</h3>
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

