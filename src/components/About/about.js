import React, { Component } from "react";
import classes from "./about.module.css";
import { Container, Row, Col } from "reactstrap";
import SkillLabel from "./SkillLabel/skillLabel";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { GoBrowser, GoServer, GoRocket } from "react-icons/go";
import { TiWeatherSunny, TiUserOutline, TiPlane } from "react-icons/ti";

const about = props => {
	return (
		<div id="about" className={classes.about}>
			<div>
				<h1>ABOUT</h1>
			</div>
			<Container>
				<div>
					<Row>
						<Col>
							<p className={classes.subtitle}>
								My Applications Are
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs="6" md="3">
							<FaDesktop />
							<p className={classes.subname}>Full-Stack</p>
						</Col>
						<Col xs="6" md="3">
							<TiUserOutline />
							<p className={classes.subname}>User Friendly</p>
						</Col>
						<Col xs="6" md="3">
							<FaMobileAlt />
							<p className={classes.subname}>Responsive</p>
						</Col>
						<Col xs="6" md="3">
							<TiPlane />
							<p className={classes.subname}>Performance</p>
						</Col>
					</Row>
				</div>
				<div>
					<Row>
						<Col>
							<p className={classes.subtitle}>
								Skills I Mastered
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs="6" md="2">
							<SkillLabel name="Node.js" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="React" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Redux" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="CSS3" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="HTML5" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Javascript" />
						</Col>
					</Row>
					<Row>
						<Col xs="6" md="2">
							<SkillLabel name="Python" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="MySQL" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="ORM" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Sequelize" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Bootstrap" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="JQuery" />
						</Col>
					</Row>
					<Row>
						<Col xs="6" md="2">
							<SkillLabel name="Ajax" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Rails" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Heroku" />
						</Col>
						<Col xs="6" md="2">
							<SkillLabel name="Restful API" />
						</Col>
						<Col xs="6" md="1">
							<SkillLabel name="Sass" />
						</Col>
						<Col xs="6" md="3">
							<SkillLabel name="Style Component" />
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default about;
