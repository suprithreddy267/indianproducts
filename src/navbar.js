import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
  } from 'reactstrap';
export default function Naavbar(){
	
	return(
	<header className="naavbar">
    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
		<div style={{width:'15%',marginLeft:'2%'}}>
			<a className="navitem" href="/">App</a>
		</div>

		<div style={{width:'20%',marginLeft:'0%'}}></div>

		<div style={{width:'10%',marginLeft:'2%'}}>
			<a className="navitem" href="/">Products</a>
		</div>

		<div style={{width:'10%',marginLeft:'15%'}}>
		<a className="navitem" href="/about">About</a>
		</div>

		<div style={{width:'10%',marginLeft:'10%'}}>
		<a className="navitem" href="/blog">Blog</a>
		</div>
	</div>
  </header>)
}

