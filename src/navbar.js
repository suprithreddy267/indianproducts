import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
  } from 'reactstrap';
export default function Naavbar(){
	
	return(
	<header className="naavbar">
    <div style={{display:'flex',flexDirection:'row'}}>
		<div style={{width:'30%',marginLeft:'5%'}}>
			<a className="navitem" href="/"><h2>App</h2></a>
		</div>

		<div style={{width:'20%',marginLeft:'0%'}}></div>

		<div style={{width:'10%',marginLeft:'10%'}}>
			<a className="navitem" href="/"><h3>Products</h3></a>
		</div>

		<div style={{width:'10%',marginLeft:'13%'}}>
		<a className="navitem" href="/about"><h3>About</h3></a>
		</div>

		<div style={{width:'10%',marginLeft:'10%',marginRight:'5%'}}>
		<a className="navitem" href="/blog"><h3>Blog</h3></a>
		</div>
	</div>
  </header>)
}

