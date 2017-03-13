export default function (state = [], action) {
	switch (action.type) {
		case "card":
		console.log("CardReducer!");
			return action.payload
	}
	return state;
}