import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Header from  '../components/Header';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots  } from '../actions';
//PROPS reads the properties that it receives and render something.
//PROPS can never change
//STATE is an object that describes your application 
//STATE are able to change

//This is part of containers, / smart containers
//they have state in them with lifecycle hooks
//class sytax aswell
//not a pure functions

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
// 	constructor() {
// super() //calls the constructor of the component
// this.state = { //STATE can be change thus this becomes important to pass onto child
// 	robots: [],
// 	// searchField: ''
// 	}
// }

componentDidMount() {
	this.props.onRequestRobots();
	// fetch('https://jsonplaceholder.typicode.com/users')
	// .then(response => response.json())
	// .then(users => {this.setState({ robots: users})});
}

// onSearchChange = (event) => {
// 	this.setState({ searchField: event.target.value })
// }

render() {
	const { searchField, onSearchChange,robots, isPending } = this.props;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
	 return isPending ?
		<h1 className='tc'>Loading</h1> : // ':' alternative return statement
	(
			<div className='tc'>
			<Header />
			<SearchBox searchChange={onSearchChange}/> 
			<Scroll> 
			<ErrorBoundary>
			<CardList robots={filteredRobots} /> 
			</ErrorBoundary>
			</Scroll>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);