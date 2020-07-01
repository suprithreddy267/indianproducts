import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import Spinner from 'react-spinkit'

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
		<div style={{margin:'5%',backgroundColor:'#e7dfd5',padding:'2%'}}>
			<div style={{backgroundColor:'#84a9ac',width:'25%',height:'3vmax',padding:'1%',marginBottom:'1%',color:'#204051',fontSize:'large'}}><p style={{height:'1em'}}>{s.brandname}</p></div>
			<div style={{backgroundColor:'#204051',color:'#e7dfd5'}}>
			{s.products.map((key)=>(
				<div>
				<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
				<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>

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
	return(<div>{list.map((s)=>(
				<div style={{margin:'5%',backgroundColor:'#27496d',padding:'2%'}}>
					<div style={{backgroundColor:'#84a9ac',width:'25%',height:'3vmax',padding:'1%',marginBottom:'1%',color:'#204051',fontSize:'large'}}><p style={{height:'1em'}}>{s.brandname}</p></div>
					<div style={{backgroundColor:'#84a9ac',color:'#142850'}}>
					{s.products.map((key)=>(
						<div>
						<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
						<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>
						<li><a href={key.ProductLink} target="_blank" className="category-link">{key.ProductName}</a></li>

						</div>
					))}
					</div>
			</div>
			))}
		
	</div>)
	
}
if(loading==true)
	return(<div style={{marginTop:'6vh'}}>
		<div style={{position:'fixed',width:'100%',zIndex:10,backgroundColor:'black',padding:'2%'}}>
			<div className="center">
  				<h1 style={{color:'#1b59ce',fontWeight:'5px'}}>{categoryselected}</h1>
			</div>
			<br></br>
			<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Indian brands</h3>
					</div>
					<div style={{width:'50%',border:'2px solid #671374',textAlign:'center',height:'2%'}}>
						<h3 style={{color:'#ed4d83',fontSize:'100%'}}>Other brands</h3>
					</div>
			</div>
		</div>
				<div style={{display:'flex',flexDirection:'row'}}>
					<div style={{width:'50%',padding:'2%'}}>
					{(indianproduct==true)?Renderindian():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
					<div style={{width:'50%',padding:'2%'}}>
					{(chineseproduct==true)?Renderchinese():<div style={{padding:'15%'}}><h1>No products</h1></div>}
					</div>
				</div>
		
			
	</div>)
else
return(<div style={{marginLeft:'50%',marginTop:'25%'}}>
	<Spinner color="#142850" name='double-bounce' />
</div>)
}

export default Categorypage;

