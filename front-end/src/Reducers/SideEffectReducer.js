export default function (state = [], action) {
	switch (action.type) {
		case "sideeffect":
		console.log("SideEffect Reducer!");
			return action.payload
	}
	return state;
}