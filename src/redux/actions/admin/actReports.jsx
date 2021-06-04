import * as actionTypes from "../actionTypes";

export const fetchListings = () => {
  const response = {
		listings: [
			{
				id: 1,
				title: "first listing",
				user: "test@email.com",
				category: "Home & Garden",
				expires_at: "",
				pricing_model: "list something",
				currency: "USD"
			},
			{
				id: 2,
				title: "second listing",
				user: "test@email.com",
				category: "Home & Garden",
				expires_at: "",
				pricing_model: "list something",
				currency: "USD"
			},
			{
				id: 3,
				title: "third listing",
				user: "test@email.com",
				category: "Home & Garden",
				expires_at: "",
				pricing_model: "list something",
				currency: "USD"
			},
			{
				id: 4,
				title: "fourth listing",
				user: "test@email.com",
				category: "Home & Garden",
				expires_at: "",
				pricing_model: "list something",
				currency: "USD"
			}
		]
	}

	return { type: actionTypes.ADMIN_SET_LISTINGS, payload: { "listings": response.listings } }
}

export const fetchReportedUsers = () => {
	const response = {
		data: [
			{
				id: 1,
				name: "argon",
				email: "argon@gmail.com",
				role: "business",
				status: "blocked",
				count: 10
			},
			{
				id: 2,
				name: "tanaka",
				email: "tanaka@gmail.com",
				role: "individual",
				status: "activated",
				count: 10
			},
			{
				id: 3,
				name: "dangnague",
				email: "dangnague@gmail.com",
				role: "business",
				status: "activated",
				count: 10
			},
			{
				id: 4,
				name: "mikumong",
				email: "mikumong@gmail.com",
				role: "business",
				status: "activated",
				count: 10
			},
			{
				id: 5,
				name: "engchi",
				email: "engchi@gmail.com",
				role: "individual",
				status: "activated",
				count: 10
			},
			{
				id: 1,
				name: "ekffk",
				email: "ekffk@gmail.com",
				role: "business",
				status: "blocked",
				count: 10
			}
		]
	}

	return { type: actionTypes.ADMIN_SET_REPORTED_USERS, payload: { "users": response.data } }
}
