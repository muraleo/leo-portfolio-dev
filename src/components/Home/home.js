import React, { Component } from "react";
import classes from "./home.module.css";

const home = props => {
	return (
		<div id="home" className={classes.home}>
			<div className={classes.hero_text_box}>
				<div className={classes.title}>
					<h1>
						Hi, I'm <span>YINGNAN LI</span>
					</h1>
					<h1>A full-stack developer</h1>
				</div>
				<a href="#about" onClick={() => props.clicked("about")}>
					View More
				</a>
			</div>
		</div>
	);
};

export default home;
