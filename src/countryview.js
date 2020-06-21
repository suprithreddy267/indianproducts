import React, { useEffect, useState } from 'react';
import firebase from './Firebase';
import { Badge, Collapse, Button, CardBody, Card,ListGroupItem,ListGroup, Row, Col} from 'reactstrap';
import BrandCard from './brandcard';


export default function CountryView({country,countryData,categories}){

    const [countrydata,setCountrydata] = useState({})
    const [openedIndex,setOpenedIndex] = useState(-1)//initially 0th category will be opened

    function displayCategories(){
        // console.log("mainopened",opened)
        return categories.map((cat,i)=>{
            
            return (
                
                    <Row >
                     <Col xs="6" sm="12">
                     <div className="text-center">
                     <Button color="primary" onClick={(e)=>{setOpenedIndex(i)}} value={cat} style={{ marginBottom: '1rem',width:'100%' }}>{cat}</Button>
                     </div>
                    <Collapse isOpen={openedIndex==i}>
                    <div>
                        <Card >
                        <CardBody>
                          <ListGroup >
                            {displayBrands(cat)}{/*display brands in cat  */}
                          </ListGroup>
                        </CardBody>
                        </Card>
                    </div>
                   
                    </Collapse>
                     </Col>
                    </Row>
                    
                
            )
        }  
        )
    }

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

    return(
    <div >
        <h1 className="text-center"><Badge color="danger" >{country}</Badge></h1>
        {displayCategories()}
    </div>
    )
}