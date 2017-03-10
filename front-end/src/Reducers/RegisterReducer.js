export default function (state = [], action) {
	switch (action.type) {
		case "register":
		console.log("RegisterReducer!");
			return action.payload
	}
	return state;
}