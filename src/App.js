import React, { Component } from "react";
import "./App.css";

import Navbar from "./containers/Navbar/navbar";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Home />
				<About />
				<Projects />
				<Contact />
			</div>
		);
	}
}

export default App;
