import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useHistory, Switch } from 'react-router-dom';
import './index.css'
import Select from 'react-select';
import { LoopCircleLoading } from 'react-loadingg';
import Search from './search'

function Left(props){

	let brandslist=props.brandslist
	var history=useHistory()
	var [clicked,setclicked]=useState('Indian')


if(brandslist!=0)
	return(
	<div style={{padding:'10%',width:'100%',overflow:'hidden'}} >


			<div style={{marginTop:'50%',backgroundColor:'gray',height:'10%'}}>
				<button  className="countrybutton" onClick={()=>{setclicked("Indian")}}>Indian</button>
				<button  className="countrybutton" onClick={()=>{setclicked("Chinese")}}>Chinese</button>
				<button  className="countrybutton">Other</button>			
				{(brandslist!=undefined)?
				<ul>{brandslist[clicked].map((s)=>(
					s.map((key)=>(<li key={key}>{key}</li>))
					))}</ul>
					:<div style={{width:'400px',height:'400px'}}>
						<LoopCircleLoading />
				</div>}
			</div>
		
	</div>
	)
else
return(<div style={{width:'400px',height:'400px'}}>
	<LoopCircleLoading />
	</div>)
}

export default Left;

