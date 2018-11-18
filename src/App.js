import React, { Component } from "react";
import "./App.css";

import Navbar from "./containers/Navbar/navbar";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";

class App extends Component {
	state = {
		nav_buttons: [
			{
				name: "home",
				link: "#home",
				active: true
			},
			{
				name: "about",
				link: "#about",
				active: false
			},
			{
				name: "projects",
				link: "#projects",
				active: false
			},
			{
				name: "contact",
				link: "#contact",
				active: false
			}
		]
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
		this.setState({
			...this.state,
			nav_buttons: updated_nav_buttons
		});
	};

	render() {
		return (
			<div className="App">
				<Navbar
					nav_buttons={this.state.nav_buttons}
					clicked={this.updateActiveNavButton}
				/>
				<Home clicked={this.updateActiveNavButton} />
				<About />
				<Projects />
				<Contact />
			</div>
		);
	}
}

export default App;
