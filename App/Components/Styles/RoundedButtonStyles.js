import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
	button: {
		width: 120,
		height: 45,
		borderRadius: 5,
		marginHorizontal: Metrics.section,
		marginVertical: Metrics.baseMargin,
		backgroundColor: Colors.panther,
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	buttonText: {
		color: Colors.snow,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: Fonts.size.medium,
		marginVertical: Metrics.baseMargin
	}
});
