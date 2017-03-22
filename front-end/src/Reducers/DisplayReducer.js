export default function (state = [], action) {
	console.log("Side Effect Reducer - action");
	console.log(action)
	switch (action.type) {
		case "sideeffect":
		console.log("SideEffect Reducer returning payload!");
			return action.payload
		default:
			console.log("SideEffectReducer returning state");
			return state;
	}
}