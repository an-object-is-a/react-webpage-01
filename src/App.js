import React from 'react';

import './styles/normalise.css';
import './styles/main_styles.css';

import ParallaxJSXWrapper from './components/ParallaxJSXWrapper.js';
import MyButton from './components/MyButton.js';

function App() {
	const Space = ParallaxJSXWrapper(<img src="./images/space.png" alt="" className="space" />, 0.02);
	const Earth = ParallaxJSXWrapper(<img src="./images/earth.png" alt="" className="earth" />, 0.07);
	const Planet = ParallaxJSXWrapper(<img src="./images/planet1.png" alt="" className="planet" />, 0.03);
	const Rocket = ParallaxJSXWrapper(<img src="./images/rocket.png" alt="" className="rocket" />, 0.04);
	const Satellite = ParallaxJSXWrapper(<img src="./images/satellite.png" alt="" className="satellite" />, 0.03);
	const Greeting = ParallaxJSXWrapper(<div className="greeting">[Welcome]</div>, 0.04);
	const Section2 = ParallaxJSXWrapper(
		<div className="section2">
			<svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
				<path d="M0,100 C65,93 76,10 100,100" />
			</svg>

			<div className="section2_container">
				<div className="left_side">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum, nostrum veniam soluta optio a reiciendis labore consequatur nesciunt ipsam.</p>
				</div>
				<div className="right_side">
					<img src="https://picsum.photos/1200/1200" alt="" className="image" />
				</div>
			</div>

			<svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
				<path d="M0,0 C65,20 90,5 100,0" />
			</svg>
		</div>
		, 0.05);
	const Section3 = ParallaxJSXWrapper(
		<div className="section3">
			Sign up for our newsletter!
				<input type="text" name="email" id="email" className="input_email" />
			<MyButton name="Sign Up" />

			<div className="contacts">
				<div className="contact_section">
					<ul>
						<li>Affiliates</li>
						<li>Careers</li>
						<li>Privacy</li>
					</ul>
				</div>
				<div className="contact_section">
					<ul>
						<li>Telephone <i className="fas fa-phone-square-alt"></i></li>
						<li>Email <i className="fas fa-envelope-square"></i></li>
					</ul>
				</div>
				<div className="contact_section">
					<ul>
						<li>Instagram <i className="fab fa-instagram-square"></i></li>
						<li>Twitter <i className="fab fa-twitter-square"></i></li>
						<li>Facebook <i className="fab fa-facebook-square"></i></li>
					</ul>
				</div>
			</div>
		</div>
		, 0.05);

	return (
		<div className="main_container">
			<div className="section1">
				{/* <img src="./images/space.png" alt="" className="space"/> */}
				<Space />
				{/* <img src="./images/earth.png" alt="" className="earth"/> */}
				<Earth />
				{/* <img src="./images/planet1.png" alt="" className="planet"/> */}
				<Planet />
				{/* <img src="./images/rocket.png" alt="" className="rocket"/> */}
				<Rocket />
				{/* <img src="./images/satellite.png" alt="" className="satellite"/> */}
				<Satellite />
				{/* <div className="greeting">[Welcome]</div> */}
				<Greeting />
			</div>

			<Section2 />
			{/* <div className="section2">
				<svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
					<path d="M0,100 C65,93 76,10 100,100" />
				</svg>

				<div className="section2_container">
					<div className="left_side">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum, nostrum veniam soluta optio a reiciendis labore consequatur nesciunt ipsam.</p>
					</div>
					<div className="right_side">
						<img src="https://picsum.photos/1200/1200" alt="" className="image" />
					</div>
				</div>

				<svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
					<path d="M0,0 C65,20 90,5 100,0" />
				</svg>
			</div> */}

			<Section3 />
			{/* <div className="section3">
				Sign up for our newsletter!
				<input type="text" name="email" id="email" className="input_email" />
				<MyButton name="Sign Up" />

				<div className="contacts">
					<div className="contact_section">
						<ul>
							<li>Affiliates</li>
							<li>Careers</li>
							<li>Privacy</li>
						</ul>
					</div>
					<div className="contact_section">
						<ul>
							<li>Telephone <i className="fas fa-phone-square-alt"></i></li>
							<li>Email <i className="fas fa-envelope-square"></i></li>
						</ul>
					</div>
					<div className="contact_section">
						<ul>
							<li>Instagram <i className="fab fa-instagram-square"></i></li>
							<li>Twitter <i className="fab fa-twitter-square"></i></li>
							<li>Facebook <i className="fab fa-facebook-square"></i></li>
						</ul>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default App;
