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
import MainNav from './mainnav';

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
        firebase.database().ref("brands").child("Other").on('value',(snapshot)=>{setchinesedata(snapshot.val())})
		firebase.database().ref("brands").child("Indian").on('value',(snapshot)=>{setindiandata(snapshot.val())})
	
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
	<MainNav/>
<Router>
  <div style={{float:'left',width:'100%'}}>
  <Switch>
  	<Route exact path='/'>
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

</div>)
}