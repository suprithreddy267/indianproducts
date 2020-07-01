import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import Spinner from 'react-spinkit'
import { Card } from 'reactstrap';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import { Divider } from '@material-ui/core';

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
	return(<div style={{padding:'5%',width:'100%'}}>{list.map((s)=>(
		<div style={{width:'100%',marginBottom:'8%',border:'2px solid #27496d',borderRadius:'4px'}}>
			<div style={{backgroundColor:'#84a9ac',width:'100%',padding:'1.5%',height:'3vmax',color:'#204051',fontSize:'large',textAlign:'center'}}><p style={{height:'2em'}}>{s.brandname}</p></div>
			<div style={{backgroundColor:'#204051',color:'#e7dfd5'}}>
			{s.products.map((key)=>(
				<div>
				<li><CallToActionIcon/><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<Divider/>
				<li><CallToActionIcon /><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<Divider/>
				<li><CallToActionIcon /><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				
				</div>
			))}
			</div>
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
	return(<div style={{padding:'5%',width:'100%'}}>{list.map((s)=>(
		<div style={{width:'100%',marginBottom:'8%',border:'2px solid #27496d',borderRadius:'4px'}}>
			<div style={{backgroundColor:'#84a9ac',width:'100%',padding:'1.5%',height:'3vmax',color:'#204051',fontSize:'large',textAlign:'center'}}><p style={{height:'2em'}}>{s.brandname}</p></div>
			<div style={{backgroundColor:'#204051',color:'#e7dfd5'}}>
			{s.products.map((key)=>(
				<div>
				<li><CallToActionIcon/><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<Divider/>
				<li><CallToActionIcon /><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<Divider/>
				<li><CallToActionIcon /><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				
				</div>
			))}
			</div>
	</div>
	))}

</div>)

	
}
if(loading==true)
	return(<div style={{marginTop:'0vh'}}>
		<div style={{position:'fixed',width:'100%',zIndex:10,backgroundColor:'#dae1e7'}}>
			<div style={{textAlign:'center'}}>
				<h1 style={{fontSize:'4vmax',color:'#1b59ce'}}>{categoryselected}</h1>
			</div>
			<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Indian brands</h3>
					</div>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Other brands</h3>
					</div>
			</div>
		</div>
		<br></br>
				<div style={{display:'flex',flexDirection:'row',marginTop:'10vh'}}>
					<div style={{width:'50%',padding:'2%'}}>
					{(indianproduct==true)?Renderindian():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
					<div style={{width:'50%',padding:'2%'}}>
					{(chineseproduct==true)?Renderchinese():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
				</div>
		
			
	</div>)
else
return(<div style={{marginLeft:'50%',marginTop:'20%'}}>
	<Spinner color="#142850" name='double-bounce' />
</div>)
}

export default Categorypage;

