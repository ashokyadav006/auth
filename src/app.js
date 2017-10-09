import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyDufv0ixlM371BwuY4yBPbra5uTFyaF144",
		    authDomain: "authentication-5c900.firebaseapp.com",
		    databaseURL: "https://authentication-5c900.firebaseio.com",
		    projectId: "authentication-5c900",
		    storageBucket: "authentication-5c900.appspot.com",
		    messagingSenderId: "1062540670476"
	  	});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	};
}

export default App;