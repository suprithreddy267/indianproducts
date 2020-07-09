import React, { useEffect, useState } from 'react';
import CountryView from './countryview';
import Spinner from 'react-spinkit';
import Select from 'react-select';
import { Helmet } from 'react-helmet';



function Products(props){

	// const [maindata,setMaindata] = useState({})
	let maindata=props.data
	let loading=props.loading
	const [categorylist,setCategorylist] = useState([]);
	const [indiandata,setIndiandata] = useState({});
	const [chinesedata,setChinesedata] = useState({});
	const [otherdata,setOtherdata] = useState({});
	var [indian,setindian]=useState()
    var [selectedcategory,setselectedcategory]=useState()
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

	const Brandsearch= (props) =>{
        let dropdownlist=props.indianbrands
		console.log(dropdownlist)
        var [options,setOptions] = useState([])
        
        
      
      useEffect(()=>{
        var x = [];
        // console.log("propsdataarray",props.data)
        if(dropdownlist){
          dropdownlist.map((item)=>{
            x.push({'value':item,'label':item})
          })
          setOptions(x)
        }
      },[])
      
    if(options!=[])    
      return(
      <div className="indianbrandslist" >
				{options.map((index)=>(
					<h5 key={index.label}>{index.label}</h5>
				))}
          </div>
	  )
	else
	return(<h1>loading</h1>)
	  }
	  

	if(loading!=true)
	return(
	<div style={{width:'100%'}}>
		<div style={{display:'flex',flexDirection:'row'}}>
		
			<div style={{width:'25%',marginTop:'5%',paddingLeft:'2%'}}>
				<div style={{position:'fixed',width:'20%',zIndex:10,backgroundColor:'black',color:'#e7dfd5',fontSize:'1vmax',fontSize:'bold',textAlign:'center'}}>
					List of Indian Brands
				</div>
				<div style={{position:'fixed',overflowY:'scroll',overflowX:'hidden',paddingLeft:'1.5%',width:'20%',marginTop:'3vmax',height:'60%',borderRadius:'4px'}}>
					<Helmet>
						<title>All Indian Brands</title>
        				<meta name="description" content="This page shows a list of all indian brands in all different categories" />
        			</Helmet>
        			<Brandsearch indianbrands={props.indianbrands} />
				</div>
			</div>

			<div style={{width:'75%',float:'right'}}>
				<div style={{display:'flex',flexDirection:'row',position:'fixed',backgroundColor:'#dae1e7',zIndex:'10',width:'100%',height:'4.5vmax'}}>
				<div style={{width:'37%',padding:'2%',color:'black',textAlign:'center',fontSize:'2vmax',fontWeight:'bold'}}>
					Indian
				</div>
				<div style={{width:'37%',padding:'2%',color:'black',textAlign:'center',fontSize:'2vmax',fontWeight:'bold'}}>
					Other
				</div>

			</div>
			<br></br>
			<div style={{display:'flex',flexDirection:'row',margin:'2vmax'}}>
				<div style={{width:'50%',padding:'2%'}}>
					<CountryView country= {"Indian"} countryData={indiandata} categories={categorylist} />
				</div>
				<div style={{width:'50%',padding:'2%'}}>
					<CountryView country= {"Other"} countryData={otherdata} categories={categorylist}  />
				</div>
			</div>
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

