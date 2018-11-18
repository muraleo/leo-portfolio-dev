import React, { Component } from "react";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

class Navbar extends Component {
	state = {
		toggle: false,
		nav_buttons: this.props.nav_buttons
	};

	toggleNavbar = () => {
		this.setState({
			...this.state,
			toggle: !this.state.toggle
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
