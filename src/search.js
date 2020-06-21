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
          borderRadius: 0,
          colors: {
            ...theme.primary50,
            primary: 'black',
            primary25:'rgb(10,200,256)',
            primary50: 'teal ',
            primary75: 'pink ',
            neutral20: 'black ',
            neutral0: 'white',
            danger:'violet',
    
          },
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
            >Search</button>

	</div>
)
}

export default Search

