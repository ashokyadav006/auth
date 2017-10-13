import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null};

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyDufv0ixlM371BwuY4yBPbra5uTFyaF144",
		    authDomain: "authentication-5c900.firebaseapp.com",
		    databaseURL: "https://authentication-5c900.firebaseio.com",
		    projectId: "authentication-5c900",
		    storageBucket: "authentication-5c900.appspot.com",
		    messagingSenderId: "1062540670476"
	  	});

	  	firebase.auth().onAuthStateChanged((user) => {
	  		if (user) {
	  			this.setState({loggedIn: true});
	  		} else {
	  			this.setState({ loggedIn: false});
	  		}
	  	});
	}

	renderContent() {
		if (this.state.loggedIn === true) {
			return (
				<Button onPress={() => firebase.auth().signOut()}>
					Log Out
				</Button>
			);
		} else if (this.state.loggedIn === false) {
			return <LoginForm />;
		} else {
			return <Spinner size="large" />
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	};
}

export default App;