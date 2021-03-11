import React, { Component } from 'react';

//In React 16, solves the problem if tere was an error,
// there was no gracefully error handling method.

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}	
	render() {
		if (this.state.hasError) {
			return <h1> Oooops. That is not good</h1>
		}
	return this.props.children
	}
}

export default ErrorBoundary;