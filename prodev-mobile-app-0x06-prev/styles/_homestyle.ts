import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
	white: "#0f0f",
};

const SPACING = {
	small: 10,
	medium: 20,
	large: 40,
};

const FONT_SIZE = {
	small: 18,
	medium: 24,
	large: 40,
};

const BORDER_RADIUS = {
	large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImageContainer: {
		flex: 1,
		height: height,
	},
	filterContainer: {
		padding: SPACING.large,
		alignItems: "center",
		marginTop: 74,
	},
	listingContainer: {
		padding: SPACING.large,
		alignItems: "center",
		marginTop: 74,
	},
	paginationContainer: {
		marginTop: SPACING.large,
	},
	titleText: {
		fontSize: FONT_SIZE.large,
		textAlign: "center",
		fontWeight: 800,
		color: COLORS.white,
	},
	titleSubTextContainer: {
		marginTop: SPACING.medium,
	},
	searchFormText: {
		fontWeight: 300,
		fontSize: FONT_SIZE.small,
		textAlign: "center",
		color: COLORS.white,
	},
	searchButton: {
		backgroundColor: COLORS.white,
		alignItems: "center",
		padding: SPACING.medium,
		borderRadius: BORDER_RADIUS.large,
		flex: 1,
	},
	buttonPrimaryText: {
		fontSize: FONT_SIZE.small,
		fontWeight: 300,
		textAlign: "center",
	},
	buttonSecondary: {
		alignItems: "center",
		padding: SPACING.medium,
		borderRadius: BORDER_RADIUS.large,
		borderWidth: 1,
		borderColor: COLORS.white,
		flex: 1,
	},
	showMoreButtonText: {
		fontSize: FONT_SIZE.small,
		fontWeight: 300,
		textAlign: "center",
		color: COLORS.white,
	},
	searchGroup: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: SPACING.medium,
		paddingHorizontal: SPACING.medium,
	},
	buttonGroupSubText: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: SPACING.small,
		marginTop: 19,
	},
	iconsection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 22
	},
	titleTextGroup: {
		marginTop: 20
	},
	searchFomText: {
		fontWeight: 400,
		fontSize: 12,
		color: '#7E7B7B'
	},
	searchFormGroup: {
		marginTop: 44,
		rowGap: 10
	},
	searchControl: {
		marginTop: 44,
		rowGap: 10
	},
	formLabel: {
		fontSize: 18,
		fontWeight: 400,
		color: '#7B7B7B',
		marginBottom: 7
	},
	searchControlGroup: {
		borderWidth: 2,
		height: 50,
		borderRadius: 10,
		borderColor: '#E9E9E9',
		paddingHorizontal: 10
	},
	formPasswordControl: {
		borderWidth: 2,
		height: 50,
		borderRadius: 10,
		borderColor: '#E9E9E9',
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	passwordControl: {
		flex: 1
	},
	showMoreButton: {
		backgroundColor: '#34967C',
		height: 53,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 25
	},
	buttonText: {
		color: 'white',
		fontSize: 17,
		fontWeight: 300
	},
	secondaryButtonGroup: {
		rowGap: 15,
		marginTop: 15,
	},
	secondaryButton: {
		height: 53,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		columnGap: 10,
		borderWidth: 1,
	},
	secondaryButtonText: {
		fontSize: 18,
		fontWeight: 400
	},
	filterGroup: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		left: 77,
		right: 76,
		bottom: 33
	},
	signupTitleText: {
		fontSize: 18,
		fontWeight: 400
	},
	signupSubTitleText: {
		fontSize: 18,
		fontWeight: 600,
		color: '#FFA800'
	},
	dividerGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 10,
		marginBottom: 25,
		marginTop: 29,
	},
	divider: {
		borderWidth: 1,
		flex: 1,
		borderColor: '#e6e6e6'
	},
	dividerText: {
		fontSize: 17,
		fontWeight: 500,
		fontVariant: ['small-caps'],
		color: '#C2C2C2'
	},
	forgotPasswordText: {
		textAlign: 'right',
		color: '#34967C',
		marginTop: 9,
	}
});

export { styles };
