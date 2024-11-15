import React from "react";
export default function About() {
	return (
		<div className="about" id="about">
			<div className="company">
				<p className="heading">Our Company's Intro</p>
				<p>
				Evero Realtors is a dynamic and innovative real estate company committed to 
				shaping the future of Ahmedabad. With a strong foundation built on trust, integrity, 
				and a deep understanding of the local market, we strive to deliver exceptional real 
				estate solutions that cater to the evolving needs of our clients.
				</p>
				<br />
				<p>
					{" "}
					To be a leading real estate developer in Ahmedabad, renowned for creating 
					sustainable, luxurious, and functional spaces that enhance the lives of our 
					residents and contribute to the city's growth and development.
				</p>
			</div>
			<div className="stats">
				<div className="apartments">
					<p>
						<span>50</span> <br /> Apartments
					</p>
				</div>
				<div className="clients">
					<p>
						<span>10</span>
						<br /> Clients
					</p>
				</div>
				<div className="employees">
					<p>
						<span>5</span>
						<br /> Employees
					</p>
				</div>
				<div className="awards">
					<p>
						<span>0</span>
						<br /> Awards
					</p>
				</div>
			</div>
		</div>
	);
}