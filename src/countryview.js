import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Badge, Collapse, Button, CardBody, Card,ListGroupItem,ListGroup, Row, Col, CardHeader} from 'reactstrap';
import BrandCard from './brandcard';

function Drop(props)
{
    const [opened,setOpened] = useState(false)
    let value=props.value
    let countryData=props.countryData
    let categories=props.categories


    function displayBrands(cat){
        var brands = countryData[cat];
        if(brands==undefined){
            return(<div><h4>Empty card</h4></div>)

        }
        else{
            
            return Object.keys(brands).map((brand)=>{
                // console.log("EACHBRAND",brand,cat)
                return (
                <ListGroupItem style={{fontSize:'1.75vmax'}}>
                             {brand}
                </ListGroupItem>
                )
            })
        }
        
    }


    return(<div style={{width:'100%',paddingLeft:'5%',paddingRight:'10%',marginBottom:'2vmin'}}> 
            <button style={{width:'100%'}}className="dropbutton" onClick={(e)=>{setOpened(!opened)}} value={value} ><p style={{fontSize:'auto'}}>{value}</p></button>
   <Collapse isOpen={opened}>
   <div>
       <Card >

        <CardHeader style={{padding:'0%',fontSize:'1.5vmax'}}>Link to {value}..<a href={value}>Link</a></CardHeader>
       <CardBody style={{padding:'0%'}}>
         <ListGroup style={{padding:'0%'}}>
           {displayBrands(value)}{/*display brands in cat  */}
         </ListGroup>
       </CardBody>
       </Card>
   </div>
   {/* <i class="fas fa-external-link-square-alt"></i> */}
   </Collapse>
   </div>)

}

export default function CountryView({country,countryData,categories}){

    const [countrydata,setCountrydata] = useState({})

    function displayCategories(){
        // console.log("mainopened",opened)
        return categories.map((cat,i)=>{
            
            return <Drop value={cat} countryData={countryData} categories={categories}/>
        }  
        )
    }


    return(
    <div style={{textAlign:"center"}}>
        
        
        {displayCategories()}
    </div>
    )
}