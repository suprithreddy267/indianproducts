import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import CountryView from './countryview';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';



function Products(props){

	// const [maindata,setMaindata] = useState({})
	let maindata=props.data
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


	return(
	<div style={{width:'100%'}}>
		<div style={{display:'flex',flexDirection:'row',marginTop:'7em'}}>
			<div style={{width:'25%',marginLeft:'5%'}}>
				<CountryView country= {"Chinese"} countryData={chinesedata} categories={categorylist} />
			</div>
			<div style={{width:'25%',marginLeft:'5%'}}>
				<CountryView country= {"Indian"} countryData={indiandata} categories={categorylist} />
			</div>
			<div style={{width:'25%',marginLeft:'5%'}}>
				<CountryView country= {"Other"} countryData={otherdata} categories={categorylist}  />
			</div>
			
		</div>
	{/* <Container>
		
		<Row>
        <Col xs="6" sm="4"  ></Col>
        <Col xs="6" sm="4" ></Col>
        <Col sm="4" ></Col>
      	</Row>
	</Container> */}
	</div>
	)
}

export default Products;

