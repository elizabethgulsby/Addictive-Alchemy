export default function (state = [], action) {
	console.log("Display - action");
	console.log(action)
	switch (action.type) {
		case "sideeffect":
		console.log("Display Reducer returning payload!");
			return action.payload
		default:
			console.log("DisplayReducer returning state");
			return state;
	}
}