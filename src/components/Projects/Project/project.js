import React, { Component } from "react";
import classes from "./project.module.css";

const project = props => {
	return <div className={classes.project}>{props.children}</div>;
};

export default project;
