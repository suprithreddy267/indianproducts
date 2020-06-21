import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Badge, Collapse, Button, CardBody, Card,ListGroupItem,ListGroup, Row, Col} from 'reactstrap';
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
                    // <div>
                        
                         <ListGroupItem>
                             <BrandCard category={cat} brand={brand} brandsdata={brands}/>
                         </ListGroupItem>
                        
                    // </div>
                )
            })
        }
        
    }


    return(<div>
        <div className="text-center">
    <button className="dropbutton" onClick={(e)=>{setOpened(!opened)}} value={value} style={{ marginBottom: '1rem',width:'100%' }}><p style={{fontSize:'auto'}}>{value}</p></button>
    </div>
   <Collapse isOpen={opened}>
   <div>
       <Card >
       <CardBody>
         <ListGroup >
            <ListGroupItem>
                <h5>Link to {value}..<a href={value}><h5 style={{display:'inline'}}>Link</h5></a></h5>
            </ListGroupItem>
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
            
            return (
                
                    <Row >
                     <Col xs="6" sm="12">
                         <Drop value={cat} countryData={countryData} categories={categories}/>
                     </Col>
                    </Row>
                    
                
            )
        }  
        )
    }


    return(
    <div >
        <h1 className="text-center"><Badge color="danger">{country}</Badge></h1>
        {displayCategories()}
    </div>
    )
}