import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
  } from 'reactstrap';
  import './footerbar.css'

export default function Naavbar(){
	
	return(
	// <div>
	// <Navbar expand="md" style={{backgroundColor: 'black'}}>
    //     <NavbarBrand  className="NavbarBrand" href="/" style={{marginLeft:'100px'}}>App name</NavbarBrand>
	// 	<div style={{float:'right',marginRight:'150px'}}>
	// 	<NavbarBrand className="NavbarBrand" href="/">Products</NavbarBrand>
	// 	<NavbarBrand className="NavbarBrand" href="/about" >About</NavbarBrand>
	// 	<NavbarBrand className="NavbarBrand" href="/blog" >Blog</NavbarBrand>
	// 	</div>
        
    //   </Navbar>
	// </div>
	<header className="naavbar">
    <div style={{display:'flex',flexDirection:'row'}}>
		<div style={{width:'30%',marginLeft:'30px'}}>
			<a style={{textDecoration:"none",color:'cyan'}} href="/"><h2>App name</h2></a>
		</div>
		<div style={{width:'35%',marginLeft:'50px'}}></div>
		<div style={{width:'10%',marginLeft:'50px'}}>
			<a style={{textDecoration:"none",color:'cyan'}} href="/"><h3>Products</h3></a>
		</div>
		<div style={{width:'10%',marginLeft:'25px'}}>
		<a style={{textDecoration:"none",color:'cyan'}} href="/about/us"><h3>About us</h3></a>
		</div>
		<div style={{width:'10%',marginLeft:'25px',float:'right'}}>
		<a style={{textDecoration:"none",color:'cyan'}} href="/blog/page"><h3>Blog</h3></a>
		</div>
		
		
	</div>
  </header>)
}

