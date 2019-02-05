// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
import React, { Component } from 'react';
import './form.css';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			showMenu: false
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropDownMenu.contains(event.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		return (
			<div>
				<button onClick={this.showMenu}>Show Menu</button>

				{this.state.showMenu ? (
					<div
						className="menu"
						ref={(element) => {
							this.dropDownMenu = element;
						}}
					>
						<ul>
							<ol>
								<button>Menu Item 1</button>
							</ol>
							<ol>
								<button>Menu Item 2</button>
							</ol>
							<ol>
								<button>Menu Item 3</button>
							</ol>
							<ol>
								<button>Menu Item 4</button>
							</ol>
						</ul>
					</div>
				) : null}
			</div>
		);
	}
}

export default Form;
