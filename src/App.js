import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Firebase';
import { Link, useHistory} from 'react-router-dom';
import Left from './left';
import Naavbar from './navbar';
import Footerbar from './footerbar';
import AddProduct from './AddProduct';
import Categorypage from './categorypage';
import About from './about';
import Blog from './blog';
import Search from './search';
import Products from './products';

export default function App(){

    var history=useHistory()
	var [data,setdata]=useState()
	var [list,setlist]=useState()
	var [categorieslist,setcategorieslist]=useState()
	var [brandslist,setbrandslist]=useState()
    var [dropdownlist,setdropdownlist]=useState()
    var [chinesedata,setchinesedata]=useState()
	var [indiandata,setindiandata]=useState()


    useEffect(()=>{
			
        firebase.database().ref("brands").on('value',(snapshot)=>{setdata(snapshot.val())})
        firebase.database().ref("Products").child("Chinese").on('value',(snapshot)=>{setchinesedata(snapshot.val())})
		firebase.database().ref("Products").child("Indian").on('value',(snapshot)=>{setindiandata(snapshot.val())})
	
	},[])
	
	useEffect(()=>{
		if(data!==undefined)
		{
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


return(<div style={{position:"relative"}}>
        <Naavbar/>
        <div id="main" style={{position:'fixed',width:"100%",height:'12%',top:'8%',zIndex:8,backgroundColor:'#010203'}}>
            <div style={{position:'fixed',top:'12%',zIndex:10,paddingLeft:'10%'}}>
                <Search data={dropdownlist}/>
            </div>
         </div> 
  <Router>
      <div style={{float:'left',width:'100%'}}>
      <Switch>
      <Route exact path='/'>
		  {/* <div style={{display:'flex',flexDirection:'row',marginTop:'18vh'}}>
			<div style={{width:'20%'}}>
				<Left brandslist={brandslist} />
			</div>
			<div style={{width:'80%'}}>
				<Products data={data}/>
			</div>
		  </div> */}
            <Products data={data}/>
        </Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/add' component={AddProduct} />
        <Route exact path='/:category'>
            <Categorypage indiandata={indiandata} chinesedata={chinesedata}/>    
        </Route>
        </Switch>
        
      </div>
  </Router>
  {/* <div style={{display:'block'}}><Footerbar/></div> */}
  
  </div>)
}