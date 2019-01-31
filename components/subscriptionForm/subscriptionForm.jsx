// taken from https://webdesign.tutsplus.com/tutorials/building-responsive-forms-with-flexbox--cms-26767

import React, { Component } from 'react';
// import logo from './logo.svg';
import '../subscriptionForm.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<form>
					<ul className="flex-outer">
						<li>
							<label htmlFor="first-name">First Name</label>
							<input type="text" id="first-name" placeholder="Enter your first name here" />
						</li>
						<li>
							<label htmlFor="last-name">Last Name</label>
							<input type="text" id="last-name" placeholder="Enter your last name here" />
						</li>
						<li>
							<label htmlFor="email">Email</label>
							<input type="email" id="email" placeholder="Enter your email address here" />
						</li>
						<li>
							<label htmlFor="phone">Phone</label>
							<input type="tel" id="phone" placeholder="Enter your phone number here" />
						</li>
						<li>
							<label htmlFor="message">Message</label>
							<textarea textarea rows="6" id="message" placeholder="Enter your message here" />
						</li>
						<li>
							<p>Age</p>
							<ul className="flex-inner">
								<li>
									<input type="checkbox" id="twenty-to-twenty-nine" />
									<label htmlFor="twenty-to-twenty-nine">20-29</label>
								</li>
								<li>
									<input type="checkbox" id="thirty-to-thirty-nine" />
									<label htmlFor="thirty-to-thirty-nine">30-29</label>
								</li>
								<li>
									<input type="checkbox" id="forty-to-forty-nine" />
									<label htmlFor="forty-to-forty-nine">40-49</label>
								</li>
								<li>
									<input type="checkbox" id="fifty-to-fifty-nine" />
									<label htmlFor="fifty-to-fifty-nine">50-59</label>
								</li>
								<li>
									<input type="checkbox" id="sixty-to-sixty-nine" />
									<label htmlFor="sixty-to-sixty-nine">60-69</label>
								</li>
								<li>
									<input type="checkbox" id="other" />
									<label htmlFor="other">Other</label>
								</li>
							</ul>
						</li>
						<li>
							<button type="submit">Submit</button>
						</li>
					</ul>
				</form>
			</div>
		);
	}
}

export default App;
