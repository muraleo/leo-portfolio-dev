import React from "react";
import classes from "../Project/project.module.css";
import SkillLabel from "../../About/SkillLabel/skillLabel";

const skills = props => {
	let skill_lists = props.skill_list.map((e, i) => {
		return <SkillLabel key={i} name={e} />;
	});
	return <div className={classes.skills}>{skill_lists}</div>;
};

export default skills;
