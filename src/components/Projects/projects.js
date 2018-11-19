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
	ModalFooter,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";
import BurgerBuilderImage from "../../assets/images/burger_builder-min.png";
import Omnifood from "../../assets/images/omnifood-min.png";
import EwLandingPage from "../../assets/images/ew_landing_page-min.png";
import EwCheckout from "../../assets/images/ew_checkout_1-min.png";
import EwLogin from "../../assets/images/ew_login-min.png";
import EwCheckout1 from "../../assets/images/ew_checkout_1-min.png";
import EwCheckout2 from "../../assets/images/ew_checkout_2-min.png";
import EwCheckout3 from "../../assets/images/ew_checkout_3-min.png";
import EwCheckout4 from "../../assets/images/ew_checkout_4-min.png";

const items = [
	{
		src: EwCheckout1,
		altText: "Checkout 1",
		caption: ""
	},
	{
		src: EwCheckout2,
		altText: "Checkout 2",
		caption: ""
	},
	{
		src: EwCheckout3,
		altText: "Checkout 3",
		caption: ""
	},
	{
		src: EwCheckout4,
		altText: "Checkout 4",
		caption: ""
	},
	{
		src: EwLogin,
		altText: "Checkout 5",
		caption: ""
	}
];

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			activeIndex: 0
		};

		this.toggle = this.toggle.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
					className={classes.project_carousel}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption
						captionText={item.caption}
						captionHeader={item.caption}
					/>
				</CarouselItem>
			);
		});
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
						size="lg"
						style={{ "margin-top": "10%" }}
					>
						<ModalHeader toggle={this.toggle}>
							Everlasting Wardrobe Sign In / Checkout Page
						</ModalHeader>
						<ModalBody>
							<Carousel
								activeIndex={activeIndex}
								next={this.next}
								previous={this.previous}
							>
								<CarouselIndicators
									items={items}
									activeIndex={activeIndex}
									onClickHandler={this.goToIndex}
								/>
								{slides}
								<CarouselControl
									direction="prev"
									directionText="Previous"
									onClickHandler={this.previous}
								/>
								<CarouselControl
									direction="next"
									directionText="Next"
									onClickHandler={this.next}
								/>
							</Carousel>
						</ModalBody>
						<ModalFooter />
					</Modal>
				</div>
			</div>
		);
	}
}

export default Projects;
