export default function (state = [], action) {
	switch (action.type) {
		case "balancing":
		// console.log("balancingReducer!");
		// console.log(action.payload);
			return action.payload
		default:
			return state;
	}
}