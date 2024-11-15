import React from "react";
export default function Footer() {
	return (
		<div className="footer" id="contacts">
			<header>
				<div>
					<p className="footer-heading">
						Realestate <br />
						Subscribe To Our Newsletter
					</p>
				</div>
				<div>
					<div className="newsletter">
						<input type="text" placeholder="Your Email Address" style={{ padding: '25px',fontSize:'25px' }}/>
						<button>
							<i
								class="fa fa-long-arrow-right"
								aria-hidden="true"
							></i>
						</button>
					</div>
				</div>
			</header>
			<span className="footer-line"></span>
			<footer>
				<div className="logo-section">
					<p className="copy-heading">Realestate</p>
					<p className="copy-heading">Made by Aakash & Ghanshyam</p>
				</div>
				<div className="footer-links">
					<div>
						<p>Realestate</p>
						<div className="foot-links">
							<a href="#!">Agents</a>
							<a href="#!">Hunters</a>
						</div>
					</div>
					<div>
						<p>Company</p>
						<div className="foot-links">
							<a href="#!">About</a>
							<a href="#!">FAQ</a>
							<a href="#!">Contact</a>
							<a href="#!">Social</a>
						</div>
					</div>
					<div>
						<p>Product</p>
						<div className="foot-links">
							<a href="#!">Apartments</a>
							<a href="#!">How it Works</a>
						</div>
					</div>
					<div>
						<p>Services</p>
						<div className="foot-links">
							<a href="#!">Renting</a>
							<a href="#!">Selling</a>
							<a href="#!">Building</a>
						</div>
					</div>
				</div>
				<p className="copyright">
						&copy; 2021 - created by{" "}
						<a href="https://github.com/aakash123254" target="_blank" rel="noreferrer">Aakash</a>
					</p>
			</footer>
		</div>
	);
}