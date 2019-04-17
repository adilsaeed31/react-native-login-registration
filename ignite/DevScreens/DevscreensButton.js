import React from 'react';
import { View, Modal } from 'react-native';
import DebugConfig from '../../App/Config/DebugConfig';
import RoundedButton from '../../App/Components/RoundedButton';
import PresentationScreen from './PresentationScreen';

export default class DevscreensButton extends React.Component {
	render() {
		if (DebugConfig.showDevScreens) {
			return (
				<View>
					<RoundedButton onPress={this.props.onPress}>{this.props.name || 'Login'}</RoundedButton>
				</View>
			);
		} else {
			return <View />;
		}
	}
}
