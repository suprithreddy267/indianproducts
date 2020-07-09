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
import IndianBrand from './indianbrands';
import { Helmet } from "react-helmet";


export default function App(){

    var history=useHistory()
	var [data,setdata]=useState()
	var [list,setlist]=useState()
	var [indianbrands,setindianbrands]=useState()
	var [categorieslist,setcategorieslist]=useState()
	var [brandslist,setbrandslist]=useState()
    var [dropdownlist,setdropdownlist]=useState()
    var [chinesedata,setchinesedata]=useState()
	var [indiandata,setindiandata]=useState()
	var [otherdata,setotherdata]=useState()
	var [loading,setloading]=useState(true)



    useEffect(()=>{
			
		firebase.database().ref("Brands").on('value',(snapshot)=>{ 
		setdata(snapshot.val())
		setotherdata(snapshot.val()["Other"])
		setindiandata(snapshot.val()["Indian"])
		setloading(false)
		// setchinesedata(snapshot.val()["Chinese"])
	})
	firebase.database().ref("allindianbrands").on('value',(snapshot)=>{ 
		setindianbrands(Object.keys(snapshot.val()))
	})

		
	},[])
	
	if(data!==undefined)
		{
		var alllist = [...new Set([...Object.keys(data['Indian']),...Object.keys(data['Other'])])]
			dropdownlist=alllist
			// setdropdownlist(alllist)
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
			// setbrandslist(brandslist)
			
		}
return(<div style={{position:"relative"}}>
		<Helmet>
        <title>Use Products of India</title>
        <meta name="description" content="A website showing various Indian Products in all possible categories.You can find alternatives to many chinese apps and products.Use Indian Products.#MakeinIndia" />
      </Helmet>
        <MainNav categories={dropdownlist}/>
		<Router>
      		<Switch>
      			<Route exact path='/'>
					  <Products data={data} loading={loading} indianbrands={indianbrands}/>
				</Route>
        		<Route exact path='/about' component={About} />
        		<Route exact path='/blog' component={Blog} />
        		<Route exact path='/add' component={AddProduct} />
				{/* <Route exact path='/indianbrands' component={IndianBrand} /> */}
        		<Route exact path='/:category'>
        		    <Categorypage indiandata={indiandata} chinesedata={otherdata} otherdata={otherdata}/>    
        		</Route>
        	</Switch>
  		</Router>
  
  </div>)
}