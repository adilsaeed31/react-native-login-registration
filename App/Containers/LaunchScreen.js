import React, { Component } from 'react';
import { Alert, Text, Image, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton';
import { Images } from '../Themes';
import Reactotron from 'reactotron-react-native';

// Styles
import styles from './Styles/LaunchScreenStyles';
export default class LaunchScreen extends Component {
	state = {
		loginForm: true
	};
	renderForm = (loginForm) => {
		if (loginForm) {
			return (
				<Form>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>E-mail</Label>
						<Input
							name="email"
							onChangeText={(text) => this._setState('email', text)}
							style={{ color: 'white' }}
						/>
					</Item>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>Password</Label>
						<Input
							name="password"
							onChangeText={(text) => this._setState('password', text)}
							style={{ color: 'white' }}
							secureTextEntry={true}
						/>
					</Item>
				</Form>
			);
		} else {
			return (
				<Form>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>Name</Label>
						<Input onChangeText={(text) => this._setState('name', text)} style={{ color: 'white' }} />
					</Item>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>E-mail</Label>
						<Input onChangeText={(text) => this._setState('email', text)} style={{ color: 'white' }} />
					</Item>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>Password</Label>
						<Input onChangeText={(text) => this._setState('password', text)} style={{ color: 'white' }} />
					</Item>
					<Item floatingLabel>
						<Label style={{ color: 'white' }}>Confirm Password</Label>
						<Input
							onChangeText={(text) => this._setState('confirmPassword', text)}
							style={{ color: 'white' }}
							secureTextEntry={true}
						/>
					</Item>
				</Form>
			);
		}
	};

	handleSubmit = () => {
		// Reactotron.log(this.state.email, 'state');

		fetch('https://api-ordertogether.herokuapp.com/auth/signin', {
			method: 'POST',
			body: JSON.stringify({ email: this.state.email, password: this.state.password }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(async (res) => {
			let { message, status } = await res;
			if (status === 200) {
				Alert.alert('Success', message);
			} else {
				Alert.alert('Error', 'Something went wrong!');
			}
		});
	};

	changeForm = () => {
		this.setState({ loginForm: !this.state.loginForm });
	};

	_setState = (name, value) => {
		this.setState({ [name]: value });
	};

	render() {
		let { loginForm } = this.state;
		return (
			<Container style={{ backgroundColor: 'rgba(0,0,0,.85)' }}>
				<Content>
					<View style={[ styles.centered, { marginTop: 30 } ]}>
						<Text style={styles.text}>#OrderTogether</Text>
					</View>
					<View
						style={{
							flex: 1,
							margin: 20,
							marginRight: 50
						}}
					>
						{this.renderForm(loginForm)}
						<View
							style={[
								styles.centered,
								{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 30 }
							]}
						>
							<View>
								<DevscreensButton name={'Submit'} onPress={this.handleSubmit} />
							</View>
							<View>
								<DevscreensButton name={loginForm ? 'Register' : 'Login'} onPress={this.changeForm} />
							</View>
						</View>
						<View style={[ styles.centered, { marginTop: 30 } ]}>
							<Image source={Images.ready} />
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}
