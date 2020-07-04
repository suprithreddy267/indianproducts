import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import CountryView from './countryview';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';
import Spinner from 'react-spinkit';



function Products(props){

	// const [maindata,setMaindata] = useState({})
	let maindata=props.data
	let loading=props.loading
	const [categorylist,setCategorylist] = useState([]);
	const [indiandata,setIndiandata] = useState({});
	const [chinesedata,setChinesedata] = useState({});
	const [otherdata,setOtherdata] = useState({});
	var clist = [];

	function loadCountryData(country){

		var countryjson = maindata[country];
		switch(country){
			case "Indian" :  setIndiandata(countryjson)
				break;
			case "Chinese" : setChinesedata(countryjson)
				break;
			case "Other" :  setOtherdata(countryjson)
		}

		console.log("countre",countryjson,country);
		var list = Object.keys(countryjson);
		
		clist = [...new Set([...clist,...list])];
		setCategorylist(clist);

	}

	useEffect(()=>{
		if(maindata!=undefined)
		{

			var keys = Object.keys(maindata);
			for(var key in keys){
				loadCountryData(keys[key]);
			}
		}
	},[maindata])


	if(loading!=true)
	return(
	<div style={{width:'100%'}}>
		<div style={{display:'flex',flexDirection:'row',position:'fixed',backgroundColor:'#dae1e7',zIndex:'10',width:'100%',height:'4vmax'}}>
			<div style={{width:'33%',padding:'2%',color:'black',textAlign:'center',fontSize:'2vmax',fontWeight:'bold'}}>
				Chinese
			</div>
			<div style={{width:'33%',padding:'2%',color:'black',textAlign:'center',fontSize:'2vmax',fontWeight:'bold'}}>
				Indian
			</div>
			<div style={{width:'33%',padding:'2%',color:'black',textAlign:'center',fontSize:'2vmax',fontWeight:'bold'}}>
				Other
			</div>
			
		</div>
		<br></br>
		<div style={{display:'flex',flexDirection:'row',margin:'2vmax'}}>
			<div style={{width:'33%',padding:'2%'}}>
				<CountryView country= {"Chinese"} countryData={chinesedata} categories={categorylist} />
			</div>
			<div style={{width:'33%',padding:'2%'}}>
				<CountryView country= {"Indian"} countryData={indiandata} categories={categorylist} />
			</div>
			<div style={{width:'33%',padding:'2%'}}>
				<CountryView country= {"Other"} countryData={otherdata} categories={categorylist}  />
			</div>
			
		</div>
	</div>
	)
else
return(
<div style={{marginTop:'30vh',width:'100%',display:'flex',justifyContent:"center",alignItems: 'center',height:'20vmax'}}>
<Spinner color="#142850" name='ball-pulse-rise' />
</div>)
}

export default Products;

