import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
  } from 'reactstrap';

export default function Naavbar(){
	
	return(<div>
	<Navbar expand="md" style={{backgroundColor: 'black'}}>
        <NavbarBrand href="/" style={{marginLeft:'100px'}}>App name</NavbarBrand>
		<div style={{float:'right',marginRight:'150px'}}>
		<NavbarBrand href="/">Products</NavbarBrand>
		<NavbarBrand href="/about" >About</NavbarBrand>
		<NavbarBrand href="/blog" >Blog</NavbarBrand>
		</div>
        
      </Navbar>
	</div>)
}

