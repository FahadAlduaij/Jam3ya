import React from "react";

function AboutUs() {
	return (
		<div className="about-us">
			<section className="logo-header-about-us">
				<img
					className="navbar-brand"
					src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
					width="100"
					height="100"
				/>
				<h2>
					Your About Us page is one of the most important pages on your website.
					An About Us page is your chance to tell the world:
				</h2>
			</section>
			<br />
			<section>
				<ul>
					<li>Who you are.</li>
					<li>What matters to you.</li>
					<li>What you do.</li>
					<li>How you do it.</li>
				</ul>

				<p>
					It’s often one of the first stops when someone visits your website or
					blog. An About Us page may be a deciding factor before you convince
					someone to convert, whether that comes in the form of: Making a
					purchase. Downloading an awesome piece of content. Signing up for your
					newsletter. Requesting information or a demo.
				</p>
			</section>
		</div>
	);
}

export default AboutUs;
