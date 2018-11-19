import React, { Component } from "react";
import classes from "./projects.module.css";
import Project from "./Project/project";
import Skills from "./Skills/skills";
import {
	Container,
	Row,
	Col,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import BurgerBuilderImage from "../../assets/images/burger_builder-min.png";
import Omnifood from "../../assets/images/omnifood-min.png";
import EwLandingPage from "../../assets/images/ew_landing_page-min.png";
import EwCheckout from "../../assets/images/ew_checkout_1-min.png";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
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
								<a onClick={this.toggle}>View Screenshots</a>
							</Project>
						</Col>
					</Row>
				</Container>
				<div>
					<Modal
						isOpen={this.state.modal}
						toggle={this.toggle}
						className={this.props.className}
					>
						<ModalHeader toggle={this.toggle}>
							Modal title
						</ModalHeader>
						<ModalBody>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={this.toggle}>
								Do Something
							</Button>{" "}
							<Button color="secondary" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Projects;
