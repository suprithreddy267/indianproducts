import React, { Component, useEffect, useState } from 'react';

function Blog(){

	

	return(
	<div>
		<div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
		<img src={require("./gdp.jpg")} width='50%'/>
		</div>
		<br></br>
		<div>
		<p style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize:'30px'}}>The already slowing Indian economy is now faced with COVID-19, a global pandemic which is fast turning into an economic pandemic. The economic impact of the COVID-19 will be a function of the magnitude and speed at which it spreads and duration over which it lasts within India and across the globe.</p>
		</div>
	</div>)
}

export default Blog;

