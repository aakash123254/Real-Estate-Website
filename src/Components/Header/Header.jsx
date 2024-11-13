import React from "react";
import landingImage from "../../img/landing.jpg";

export default function Header() {
	return ( 
		<>
			<div className="header" id="header">
				<div className="landing-text">
					<div className="cta">
						<p>Find Your New Modern Apartment</p>
					</div>
					<div className="search-bar">
						<input type="text" placeholder="Search Location "style={{ padding: '10px' ,fontSize:'20px'}} />
						<button>Search</button>
					</div>
				</div>
				<div className="landing-image">
					<img src={landingImage} alt="" />
				</div>
				<div className="contact-info">
					<div className="phone">
						<p>
							<i class="fa fa-phone" aria-hidden="true"></i>{" "}
							<span>+91 9924162244</span>
						</p>
					</div>
					<div>
						<p>
							<i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
							<span>Ahmedabad, Gujarat</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
