import React, { Component, useEffect, useState } from 'react';
import Album from './tt';
import { Helmet } from 'react-helmet';

function Blog(){

	

	return(
	<div >
		<Helmet>
        <title>Blog about Indian Products</title>
        <meta name="description" content="Shows description of various news regarding the Atmanirbhar by Narendra Modi. Use only indian products and avoid using chinese products and apps" />
      </Helmet>
		<Album/>
	</div>)
}

export default Blog;

