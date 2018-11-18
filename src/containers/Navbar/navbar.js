import React, { Component } from "react";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

class Navbar extends Component {
	state = {
		toggle: false,
		nav_buttons: [
			{
				name: "home",
				link: "#",
				active: true
			},
			{
				name: "about",
				link: "#",
				active: false
			},
			{
				name: "projects",
				link: "#",
				active: false
			},
			{
				name: "contact",
				link: "#",
				active: false
			}
		]
	};

	toggleNavbar = () => {
		this.setState({
			...this.state,
			toggle: !this.state.toggle
		});
	};

	updateActiveNavButton = name => {
		let updated_nav_buttons = this.state.nav_buttons;
		for (let idx = 0; idx < updated_nav_buttons.length; idx++) {
			if (updated_nav_buttons[idx].name === name) {
				updated_nav_buttons[idx].active = true;
			} else {
				updated_nav_buttons[idx].active = false;
			}
		}
		console.log(updated_nav_buttons);
		this.setState({
			...this.state,
			nav_buttons: updated_nav_buttons
		});
	};

	render() {
		let navbar_classes = this.state.toggle
			? [classes.Navbar, classes.toggle_height].join(" ")
			: classes.Navbar;
		let navbar_li_classes = this.state.toggle ? classes.toggle_show : "";

		let navbar_buttons = this.state.nav_buttons.map(e => {
			if (e.active) {
				return (
					<li key={e.name} className={navbar_li_classes}>
						<a
							id={classes.active}
							href={e.link}
							onClick={() => this.updateActiveNavButton(e.name)}
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
						onClick={() => this.updateActiveNavButton(e.name)}
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
						onClick={() => this.toggleNavbar()}
						href="#"
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
