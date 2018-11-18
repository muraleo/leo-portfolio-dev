import React, { Component } from "react";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

class Navbar extends Component {
	render() {
		let navbar_classes = this.props.toggle
			? [classes.Navbar, classes.toggle_height].join(" ")
			: classes.Navbar;
		let navbar_li_classes = this.props.toggle ? classes.toggle_show : "";

		let navbar_buttons = this.props.nav_buttons.map(e => {
			if (e.active) {
				return (
					<li key={e.name} className={navbar_li_classes}>
						<a
							id={classes.active}
							href={e.link}
							onClick={() => this.props.clicked(e.name)}
						>
							{e.name}
						</a>
					</li>
				);
			} else {
				return (
					<li
						key={e.name}
						className={navbar_li_classes}
						onClick={() => this.props.clicked(e.name)}
					>
						<a href={e.link}>{e.name}</a>
					</li>
				);
			}
		});

		return (
			<nav>
				<ul className={navbar_classes}>
					<a
						className={classes.toggle}
						onClick={() => this.props.toggleNavbar()}
					>
						<FaBars />
					</a>
					{navbar_buttons}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
