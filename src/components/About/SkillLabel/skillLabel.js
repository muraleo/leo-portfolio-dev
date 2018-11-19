import React from "react";
import classes from "./skillLabel.module.css";

const skillLable = props => {
	return <div className={classes.skillLable}>{props.name}</div>;
};

export default skillLable;
