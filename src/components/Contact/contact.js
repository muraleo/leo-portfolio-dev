import React, { Component } from "react";
import classes from "./contact.module.css";
import avatar from "../../assets/images/avatar.jpeg";
import {
	TiSocialFacebookCircular,
	TiSocialLinkedinCircular
} from "react-icons/ti";
import { GoMarkGithub } from "react-icons/go";
import { Container, Row, Col } from "reactstrap";

const contact = props => {
	return (
		<div id="contact" className={classes.contact}>
			<h1>CONTACT</h1>
			<Container>
				<Row>
					<Col>
						<img src={avatar} />
					</Col>
				</Row>

				<Row>
					<Col
						sm={{ size: 6, offset: 3 }}
						md={{ size: 4, offset: 4 }}
					>
						<p>
							I am <span> Yingnan Li </span>, a passionate
							<span> Full-Stack Web Developer </span>, also a
							quick learner. Please feel free to contact me
							through <span>yl3651@nyu.edu</span>.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs="4" sm="4" md={{ size: 2, offset: 3 }}>
						<a
							href="https://www.linkedin.com/in/yingnan-li-leo/"
							target="_blank"
							rel="noreferrer"
						>
							<TiSocialLinkedinCircular />
						</a>
					</Col>
					<Col xs="4" sm="4" md="2">
						<a
							href="https://github.com/muraleo"
							target="_blank"
							rel="noreferrer"
						>
							<GoMarkGithub style={{ width: "63px" }} />
						</a>
					</Col>
					<Col xs="4" sm="4" md="2">
						<a
							href="https://www.facebook.com/yingnan.li.73"
							target="_blank"
							rel="noreferrer"
						>
							<TiSocialFacebookCircular />
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default contact;
