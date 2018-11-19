import React, { Component } from "react";
import classes from "./projects.module.css";
import Project from "./Project/project";
import Skills from "./Skills/skills";
import { Container, Row, Col } from "reactstrap";
import BurgerBuilderImage from "../../assets/images/burger_builder-min.png";
import Omnifood from "../../assets/images/omnifood-min.png";
import EwLandingPage from "../../assets/images/ew_landing_page-min.png";
import EwCheckout from "../../assets/images/ew_checkout_1-min.png";

class Projects extends Component {
	render() {
		return (
			<div id="projects" className={classes.projects}>
				<h1>PROJECTS</h1>
				<Container>
					<Row>
						<Col sm="12" md={{ size: "5", offset: "1" }}>
							<Project>
								<img
									src={BurgerBuilderImage}
									alt="burger builder project screenshot"
								/>
								<p>Burger Builder Project from Udemy</p>
								<Skills
									skill_list={["React", "Redux", "CSS"]}
								/>
								<a
									href="https://leo-burger-builder.firebaseapp.com/"
									target="_blank"
								>
									View Website
								</a>
							</Project>
						</Col>
						<Col md={{ size: "5" }}>
							<Project>
								<img
									src={Omnifood}
									alt="omnifood project screenshot"
								/>
								<p>Omnifood Project from Udemy</p>
								<Skills
									skill_list={["HTML5", "CSS3", "Javascript"]}
								/>
								<a
									href="https://muraleo.github.io/omnifood/"
									target="_blank"
								>
									View Website
								</a>
							</Project>
						</Col>
					</Row>
					<Row>
						<Col sm="12" md={{ size: "5", offset: "1" }}>
							<Project>
								<img
									src={EwLandingPage}
									alt="Everlasting Wardrobe landing page screenshot"
								/>
								<p>Everlasting Wardrobe Landing Page</p>
								<Skills
									skill_list={[
										"Rails",
										"React",
										"Style Component"
									]}
								/>
								<a
									href="https://www.everlastingwardrobe.com/"
									target="_blank"
								>
									View Website
								</a>
							</Project>
						</Col>
						<Col sm="12" md="5">
							<Project>
								<img
									src={EwCheckout}
									alt="Everlasting Checkout page screenshot"
								/>
								<p>Everlasting Wardrobe Checkout Page</p>
								<Skills
									skill_list={["Rails", "SASS", "Javascript"]}
								/>
								<a>View Screenshots</a>
							</Project>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Projects;
