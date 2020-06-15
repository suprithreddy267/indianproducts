import React, { useEffect, useState } from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function Footerbar(){
	
	return(<footer className="footer">
    <div style={{display:'flex',flexDirection:'row'}}>
		<div style={{width:'30%',padding:'30px',marginLeft:'50px'}}>
			<h2>App name</h2>
			<ul>
				<p style={{color:"white"}}>The Indian Economy Gearing Towards Self-Reliance Prompts Made-In-India Alternatives For Foreign Products</p>
			</ul>
		</div>
		<div style={{width:'30%',padding:'0px',marginLeft:'50px'}}>
			<ul style={{listStyle:"none"}}>
			<li><a style={{textDecoration:"none",color:'cyan'}} href="/"><h3>Home</h3></a></li>
			<li><a style={{textDecoration:"none",color:'cyan'}} href="/"><h3>Products</h3></a></li>
			<li><a style={{textDecoration:"none",color:'cyan'}} href="/blog/page"><h3>Blog</h3></a></li>
			</ul>
		</div>
		<div style={{width:'30%',padding:'10px',marginLeft:'50px'}}>
			<div>
			<a style={{textDecoration:"none",color:'cyan'}} href="/about/us">About us</a>
			</div>
			<hr></hr>
			<div>
				Privacy Policy
			</div>
			<hr></hr>
			<div>
				TERMS & CONDITIONS
			</div>
			
		</div>
		
		
	</div>
  </footer>)
}

