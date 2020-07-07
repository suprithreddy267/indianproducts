import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import Search from './search'
import Select from 'react-select';
import firebase from './Firebase';




export default function IndianBrand(){
    
    var [list,setlist] = useState(['loading'])

    useEffect(()=>{
			
		firebase.database().ref("allindianbrands").on('value',(snapshot)=>{ 
            console.log("all brands",Object.keys(snapshot.val()))
		setlist(Object.keys(snapshot.val()))
		// setotherdata(snapshot.val()["Other"])
		// setindiandata(snapshot.val()["Indian"])
		// setloading(false)
		// setchinesedata(snapshot.val()["Chinese"])

	})
		
	},[])

    const Brandsearch= (props) =>{
        let dropdownlist=props.data
      
        var [options,setOptions] = useState([])
        var [selectedcategory,setselectedcategory]=useState()
        
        var colourStyles = {
          control: styles => ({ ...styles, backgroundColor: 'white' }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // const color = chroma(data.color);
            return {
              ...styles,
              backgroundColor: isDisabled ? 'red' : 'white',
              color: 'black',
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
        //   window.location.pathname=selectedcat.value;    
            console.log("selected",selectedcat)
        }
          
      return(
      <div className="mainsearch" >
              <div className= "searchbar">
             <Select
              defaultValue={{label:"Check if a brand is Indian",value:""}}
              value={selectedcategory}
              onChange={handleChange}
              options={options}
              styles={colourStyles}
            />
            </div>
          </div>
      )
      }

    return(<div>
        <Helmet>
        <title>All Indian Brands</title>
        <meta name="description" content="This page shows a list of all indian brands in all different categories" />
      </Helmet>
        List of Indian Brands
        <Brandsearch data={list} />
    </div>)
}