export default function(logoutState) {
	console.log(logoutState);
		return {
			type: "logout",
			payload: logoutState
		}
}