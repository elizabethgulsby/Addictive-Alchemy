export default function(state = [], action) {
	// console.log(action.type);
	switch (action.type) {
		case "login":
			return action.payload
			default:
				return state;
	}
}