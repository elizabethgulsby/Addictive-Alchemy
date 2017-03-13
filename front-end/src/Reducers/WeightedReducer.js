export default function (state = [], action) {
	switch (action.type) {
		case "weight":
		console.log("WeightReducer!");
			return action.payload
	}
	return state;
}