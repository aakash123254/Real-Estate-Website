import serviceImage from "../../img/services.jpeg";
import React from "react";
export default function Services() {
	return (
		<div className="services">
			<div className="services-intro">
				<p className="services-heading">Services</p>
				<p className="services-text">
				At Evero, we offer a comprehensive suite of real estate services designed 
				to cater to your specific needs. From buying and selling properties to property rentals 
				and management, our experienced team is dedicated to providing top-notch solutions. 
				We also offer expert real estate consulting services, including investment advice and 
				property valuations. Additionally, we can assist you with home loans and financing options 
				to make your real estate journey seamless.
				</p>
			</div>
			<div className="services-content">
				<div className="services-img">
					<img src={serviceImage} alt="" />
				</div>
				<div className="service">
					<div>
						<p className="service-heading">Renting</p>
						<p className="service-text">
						Looking to rent a home or office space in Ahmedabad? We've got you covered. 
						Our platform offers a wide range of rental properties to suit your needs. 
						From cozy apartments to spacious commercial spaces, find your ideal rental 
						property with ease. Our user-friendly search filters help you narrow down your 
						options based on location, budget, and property type.
						</p>
					</div>
					<div>
						<p className="service-heading">Selling</p>
						<p className="service-text">
						Our expert team is here to guide you 
						through the entire process. From property valuation to legal documentation, we handle 
						every aspect with precision. Our extensive network of buyers and strategic marketing 
						techniques ensure your property gets maximum exposure. Let us help you achieve a 
						seamless and profitable sale.
						</p>
					</div>
					<div>
						<p className="service-heading">Building</p>
						<p className="service-text">
						At Evero, we specialize in turning your dream home into reality. 
						Our team of skilled architects and engineers work closely with you to design and 
						construct homes that perfectly align with your vision.
						From custom home building to renovations and commercial construction, we handle 
						every aspect of the building process with precision and expertise. 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}