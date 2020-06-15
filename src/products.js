import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useHistory, Switch } from 'react-router-dom';
import './index.css'
import Select from 'react-select';
import { LoopCircleLoading } from 'react-loadingg';
import Search from './search'

function Products(){
	var history=useHistory()
	var [data,setdata]=useState()
	var [list,setlist]=useState()
	var [categorieslist,setcategorieslist]=useState()
	var [brandslist,setbrandslist]=useState()
	var [dropdownlist,setdropdownlist]=useState()
	var [clicked,setclicked]=useState("Indian")

	useEffect(()=>{
			
		firebase.database().ref("Products").on('value',(snapshot)=>{setdata(snapshot.val())})
	},[])
	
	useEffect(()=>{
		if(data!==undefined)
		{
			var list={}
			console.log(data)
			for(let v in data){
				let z=[]
			for(let i in data[v])
			{
				let y={}
				let x=[]
				for(let j in data[v][i])
				{
					x.push(j)
				}
				y={categoryname:i,brands:x}
				z.push(y)
			}
			list[v]=z
			}
			console.log(list)
			setlist(list)
			categorieslist=[]
			for(let i in list)
			{
				for(let j in list[i])
				{
					categorieslist.push(list[i][j].categoryname)
				}
			}
			
			categorieslist = Array.from(new Set(categorieslist))
			dropdownlist=categorieslist.map((s)=>{return{label:s,value:s}})
			setcategorieslist(categorieslist)
			setdropdownlist(dropdownlist)

			let brandslist={}
			for(let v in data){
				let z=[]
			for(let i in data[v])
			{
				let x=[]
				for(let j in data[v][i])
				{
					x.push(j)
				}
				
				z.push(x)
			}
			brandslist[v]=z
			}
			setbrandslist(brandslist)
		}
		
	},[data])

function Renderindian(s){
	let temp=list["Indian"]
	let found=false
	let brands=[]
	for(let i in temp)
	if(temp[i].categoryname==s)
	{	
		brands=temp[i].brands
		found=true
	}
	if(found==true)
		return(<div>
		<ul>{brands.map((key)=>(<div><li>{key}</li></div>))}</ul>
			</div>)
	
	else
	return(<div><p style={{display: "flex",justifyContent: "center",alignItems: "center"}}>no Products found....</p></div>)
}

function Renderchinese(s){
	let temp=list["Chinese"]
	
	let found=false
	let brands=[]
	for(let i in temp)
	if(temp[i].categoryname==s)
	{	
		brands=temp[i].brands
		found=true
	}
	if(found==true)
	{
		return(<div>
		<ul>{brands.map((key)=>(<div><li>{key}</li></div>))}</ul>
			
		</div>)
	}
	
	else
		{
			return(<div><p style={{display: "flex",justifyContent: "center",alignItems: "center"}}>no Products found....</p></div>)
		}
}

if(list!=undefined&&categorieslist.length!=0)
	return(
	<div style={{marginTop:'50px'}} >
		<Search data={dropdownlist}/>
		<br></br>
		<div style={{marginTop:'60px'}}>
		<button  className="ta-search" onClick={()=>{setclicked("Indian")}}>Indian</button><button  className="ta-search" onClick={()=>{setclicked("Chinese")}}>Chinese</button><button  className="ta-search">Other</button>			
		{(brandslist!=undefined)?
		<ul>{brandslist[clicked].map((s)=>(
			s.map((key)=>(<li>{key}</li>))
			
		))}</ul>:<div style={{width:'400px',height:'400px'}}>
	<LoopCircleLoading />
	</div>}
		</div>
		
		<br></br>
		<div id="products">
			
				{categorieslist.map((s)=>(<div style={{marginTop:'60px'}}>
					<Link to={s} style={{display: "flex",justifyContent: "center",alignItems: "center"}} className="col-lg-12">{s}</Link>
					<div  className="col-lg-6">
						{Renderindian(s)}
					</div>
					<div  className="col-lg-6">
						{Renderchinese(s)}
					</div>
					<hr className="col-lg-12" style={{height:'2px'}}></hr>
				</div>
				
				))}
		</div>
			
	</div>)
else
return(<div style={{width:'400px',height:'400px'}}>
	<LoopCircleLoading />
	</div>)
}

export default Products;

