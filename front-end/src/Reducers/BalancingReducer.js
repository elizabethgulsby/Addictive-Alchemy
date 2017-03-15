export default function (state = [], action) {
	switch (action.type) {
		case "balancing":
		console.log("balancingReducer!");
			return action.payload
	}
	return state;
}