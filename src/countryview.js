import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Badge, Collapse, Button, CardBody, Card,ListGroupItem,ListGroup, Row, Col, CardHeader} from 'reactstrap';
import BrandCard from './brandcard';
import AddProduct from './AddProduct';

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
            // console.log("test",brands)

            return Object.keys(brands).map((brand)=>{
                
                var dataobj = brands[brand];
                var p1id = Object.keys(brands[brand])[0]
                var ASIN = dataobj[p1id]['ProductId']
               var url = `https://www.amazon.in/gp/product/${ASIN}/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=${ASIN}&linkCode=as2&tag=mvamsi26-21`
                // console.log("EACHBRAND",ASIN)
                return (
                <ListGroupItem style={{fontSize:'1.75vmax'}}>
                             <a style={{color:"black"}} href={url} target="_blank">{brand}</a>
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

        <CardHeader style={{padding:'0%',fontSize:'1.5vmax'}}><a href={value} target="_blank">View All</a></CardHeader>
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