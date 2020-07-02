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
	var [otherdata,setotherdata]=useState()


    useEffect(()=>{
			
		firebase.database().ref("test").on('value',(snapshot)=>{console.log("In Home",snapshot.val()["Other"]); 
		setdata(snapshot.val())
		setotherdata(snapshot.val()["Other"])
		setindiandata(snapshot.val()["Indian"])
		// setchinesedata(snapshot.val()["Chinese"])

	})
		
	},[])
	
	useEffect(()=>{
		if(data!==undefined)
		{
		var alllist = [...new Set([...Object.keys(data['Indian']),...Object.keys(data['Other'])])]
		console.log("Total Data",alllist)
			setdropdownlist(alllist)
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
        <MainNav categories={dropdownlist}/>
 	 <Router>
      <div style={{float:'left',width:'100%'}}>
      <Switch>
      <Route exact path='/'><Products data={data}/></Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/add' component={AddProduct} />
        <Route exact path='/:category'>
            <Categorypage indiandata={indiandata} chinesedata={otherdata} otherdata={otherdata}/>    
        </Route>
        </Switch>
        
      </div>
  </Router>
  
  </div>)
}