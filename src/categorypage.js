import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import Spinner from 'react-spinkit'
import { Card } from 'reactstrap';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Divider } from '@material-ui/core';

function Categorypage(props){
	var indiandata=props.indiandata
	var chinesedata=props.chinesedata
	var otherdata=props.otherdata
	const params=useParams();
	var categoryselected=params.category
	var [indianproduct,setindianproduct]=useState(false)
	var [chineseproduct,setchineseproduct]=useState(false)
	var [otherproduct,setotherproduct]=useState(false)
	var [loading,setloading]=useState(false)


	
	useEffect(()=>{
		if(indiandata!==undefined)
		{
			for(let i in otherdata){
				if(i==categoryselected)
				setotherproduct(true)
			}
			for(let i in indiandata){
				if(i==categoryselected)
				setindianproduct(true)
			}
			setloading(true)
		}
		
	},[otherdata,indiandata])

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
	return(<div style={{padding:'5%',width:'100%'}}>{list.map((s)=>(
		<div style={{width:'100%',marginBottom:'2vmax',border:'2px solid #27496d',borderRadius:'4px'}}>
			<div style={{backgroundColor:'#204051',color:'#e7dfd5',width:'100%',padding:'1.5%',fontSize:'5vmax',fontSize:'large',textAlign:'center'}}>{s.brandname}</div>
			<div style={{backgroundColor:'#e0dede',color:'#204051'}}>
			{s.products.map((key)=>(
				<div>
				{(key.ProductId!="")?<li><LabelImportantIcon/><a href={`https://www.amazon.in/gp/product/${key.ProductId}/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=${key.ProductId}&linkCode=as2&tag=mvamsi26-21`} target="_blank" className="category-link">{key.ProductName}</a></li>:
				<li><LabelImportantIcon/><a href={`https://www.amazon.in/s?k=${key.ProductName}`} target="_blank" className="category-link">{key.ProductName}</a></li>}
				<Divider/>
				</div>
			))}
			</div>
	</div>
	))}

</div>)	
}

function Renderother(){
	let temp=otherdata[categoryselected]
	let list=[]
	for(let i in temp)
	{
		let x=[]
		for(let j in temp[i])
		x.push(temp[i][j])
		list.push({brandname:i,products:x})
	}
	// ,borderTopLeftRadius:'20px',borderTopRightRadius:'20px'
	return(<div style={{padding:'5%',width:'100%'}}>{list.map((s)=>(
		<div style={{width:'100%',marginBottom:'2vmax',border:'2px solid #27496d',borderRadius:'4px'}}>
			<div style={{backgroundColor:'#204051',color:'#e7dfd5',width:'100%',padding:'1.5%',fontSize:'5vmax',fontSize:'large',textAlign:'center'}}>{s.brandname}</div>
			<div style={{backgroundColor:'#e0dede',color:'#204051'}}>
			{s.products.map((key)=>(
				<div>
				{(key.ProductId!="")?<li><LabelImportantIcon/><a href={`https://www.amazon.in/gp/product/${key.ProductId}/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=${key.ProductId}&linkCode=as2&tag=mvamsi26-21`} target="_blank" className="category-link">{key.ProductName}</a></li>:
				<li><LabelImportantIcon/><a href={`https://www.amazon.in/s?k=${key.ProductName}`} target="_blank" className="category-link">{key.ProductName}</a></li>}
				<Divider/>
				</div>
			))}
			</div>
	</div>
	))}

</div>)
	
}
if(props!=undefined&&loading!=false)
	return(<div>
		<div style={{position:'fixed',width:'100%',zIndex:10,backgroundColor:'#dae1e7'}}>
			<div style={{textAlign:'center'}}>
				<h1 style={{fontSize:'3vmax',color:'#1b59ce',fontWeight:'bolder'}}>{categoryselected}</h1>
			</div>
			<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',textAlign:'center',fontSize:'2vmax',fontWeight:'bolder',color:'#142850',paddingLeft:'10%',paddingRight:'10%'}}>
						Indian brands
					</div>
					<div style={{width:'50%',textAlign:'center',fontSize:'2vmax',fontWeight:'bolder',color:'#142850',paddingLeft:'10%',paddingRight:'10%'}}>
						Other brands
					</div>
			</div>
		</div>
		<br></br>
				<div style={{display:'flex',flexDirection:'row',marginTop:'3vmax'}}>
					<div style={{width:'50%',padding:'2vmax'}}>
					{(indianproduct==true)?Renderindian():<div style={{padding:'10%',position:'fixed',justifyContent:'center',alignItems:'center',fontSize:'3vmax',fontWeight:'bold',textAlign:'center'}}>NO PRODUCTS FOUND</div>}
					</div>
					<div style={{width:'50%',padding:'2vmax'}}>
					{(otherproduct==true)?Renderother():<div style={{padding:'10%',position:'fixed',justifyContent:'center',alignItems:'center',fontSize:'3vmax',fontWeight:'bold',textAlign:'center'}}>NO PRODUCTS FOUND</div>}
					</div>
				</div>
		
	</div>)
else
return(
<div style={{marginTop:'30vh',width:'100%',display:'flex',justifyContent:"center",alignItems: 'center',height:'20vmax'}}>
<Spinner color="#142850" name='ball-pulse-rise' />
</div>)
}

export default Categorypage;

// <Card style={{width:'auto',textAlign:'center',fontSize:'3vmax',height:'20vmax',padding:'2vmax',borderRadius:'30px'}}>
// 	<h1>Loading {categoryselected} ..</h1>
// 	<Spinner color="#142850" name='ball-pulse-rise' />
// </Card>