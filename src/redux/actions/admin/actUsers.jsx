import * as actionTypes from "../actionTypes";

export const fetchUsers = () => {
	
	const response = {
		data: [
			{
				id: 1,
				name: "argon",
				email: "argon@gmail.com",
				role: "business",
				status: "blocked",
				created_at: "2021-01-24"
			},
			{
				id: 2,
				name: "tanaka",
				email: "tanaka@gmail.com",
				role: "individual",
				status: "activated",
				created_at: "2021-02-24"
			},
			{
				id: 3,
				name: "dangnague",
				email: "dangnague@gmail.com",
				role: "business",
				status: "activated",
				created_at: "2021-03-24"
			},
			{
				id: 4,
				name: "mikumong",
				email: "mikumong@gmail.com",
				role: "business",
				status: "activated",
				created_at: "2021-03-24"
			},
			{
				id: 5,
				name: "engchi",
				email: "engchi@gmail.com",
				role: "individual",
				status: "activated",
				created_at: "2021-04-24"
			},
			{
				id: 1,
				name: "ekffk",
				email: "ekffk@gmail.com",
				role: "business",
				status: "blocked",
				created_at: "2021-05-24"
			}
		]
	}

	return { type: actionTypes.ADMIN_SET_USERS, payload: response.data }
}
