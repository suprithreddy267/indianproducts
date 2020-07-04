import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Link, useParams } from 'react-router-dom';
import './index.css'
import { LoopCircleLoading } from 'react-loadingg';
import Select from 'react-select';

function Search(props){
  let dropdownlist=props.data

  var [options,setOptions] = useState([])
  var [selectedcategory,setselectedcategory]=useState()
  
  var colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : '#353839',
        color: '#FFF',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

useEffect(()=>{
  var x = [];
  // console.log("propsdataarray",props.data)
  if(props.data){
    props.data.map((item)=>{
      x.push({'value':item,'label':item})
    })
    setOptions(x)
  }
},[props])

  const handleChange = (selectedcat) =>{
    window.location.pathname=selectedcat.value;

  }
	
return(
<div className="mainsearch" >
		<div className= "searchbar">
       <Select
        defaultValue={{label:"Select Category",value:""}}
        value={selectedcategory}
        onChange={handleChange}
        options={options}
        styles={colourStyles}
      />
      </div>
	</div>
)
}

export default Search


// <button  className="searchbutton" onClick={()=>{

// let path=""
//       if(selectedcategory!==undefined)
// path=selectedcategory
//       else
//       alert("Select any Category")
      
//       if(path!==undefined)
//      {
//       window.location.pathname=path}
//     }}
//       ><i class="fa fa-search" aria-hidden="true"></i></button>