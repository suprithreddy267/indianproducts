import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import Select from 'react-select';

function Search(props){
	let dropdownlist=props.data
	
	var [selectedcategory,setselectedcategory]=useState()
	
return(
<div className="mainsearch" >
		<div className= "searchbar">
      	<Select
        size={10}
        defaultValue={{label:"Select Category",value:""}}
		onChange={(e) => {setselectedcategory(e.value)}}
		options={dropdownlist}
		value={{label:selectedcategory,value:selectedcategory}}
        theme={theme => ({
          ...theme,
          borderRadius: 20
        })}
       /> 
      </div>
      <button  className="searchbutton" onClick={()=>{

		  let path=""
            if(selectedcategory!==undefined)
			path=selectedcategory
            else
            alert("Select any Category")
            
            if(path!==undefined)
           {
            window.location.pathname=path}
          }}
            ><i class="fa fa-search" aria-hidden="true"></i></button>

	</div>
)
}

export default Search

