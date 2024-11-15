import React from "react";
export default function Works() {
	return (
		<div className="works" id="works">
			<div className="works-intro">
				<p className="works-heading">How it works?</p>
				<p className="works-text">
				Finding your dream home in Ahmedabad is just a few clicks away. Simply browse through 
				our extensive property listings, utilizing our advanced search filters to narrow down 
				your options based on your specific needs.
				</p>
			</div>
			<div className="works-cards">
				<div className="card">
					<h1 className="numbers">01</h1>
					<p className="instructions">Find Your Location</p>
					<p className="work-text">
					Discover your dream home in Ahmedabad with ease. Our user-friendly platform 
					allows you to search for properties based on your specific criteria, such as 
					location, budget, and property type.
					</p>
					<a href="#!" style={{color:'red' , textDecoration:'none'}}>Find Location</a>
				</div>
				<div className="card">
					<h1 className="numbers">02</h1>
					<p className="instructions">Find Apartment</p>
					<p className="work-text">
					Searching for your dream apartment in Ahmedabad? Look no further! Our platform offers a wide range 
					of apartments to suit every budget and lifestyle. From cozy studios to spacious family homes, you'll 
					find the perfect place to call home.
					</p>
					<a href="#!" style={{color:'red' , textDecoration:'none'}}>Find Apartment</a>
				</div>
				<div className="card">
					<h1 className="numbers">03</h1>
					<p className="instructions">Make Contact</p>
					<p className="work-text">
					Have a question or need assistance? Our team of experts is ready to assist you. 
					Contact us today to learn more about our services, discuss your real estate needs, 
					or schedule a property viewing.
					</p>
					<a href="#!" style={{color:'red' , textDecoration:'none'}}>Make Contact</a>
				</div>
			</div>
		</div>
	);
}