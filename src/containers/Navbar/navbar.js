import React, { Component } from "react";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

class Navbar extends Component {
	state = {
		toggle: false
	};
	toggleNavbar = () => {
		this.setState({
			...this.state,
			toggle: !this.state.toggle
		});
	};
	render() {
		let navbar_class = this.state.toggle
			? [classes.Navbar, classes.toggle_height].join(" ")
			: classes.Navbar;

		let navbar_li_class = this.state.toggle ? classes.toggle_show : "";
		return (
			<nav>
				<ul className={navbar_class}>
					<a
						class={classes.toggle}
						onClick={() => this.toggleNavbar()}
						href="#"
					>
						<FaBars />
					</a>
					<li className={navbar_li_class}>
						<a href="#">Home</a>
					</li>
					<li className={navbar_li_class}>
						<a href="#">About</a>
					</li>
					<li className={navbar_li_class}>
						<a href="#">Projects</a>
					</li>
					<li className={navbar_li_class}>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
