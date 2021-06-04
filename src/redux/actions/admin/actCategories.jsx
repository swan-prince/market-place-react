import * as actionTypes from "../actionTypes";

export const fetchCategories = () => {
  const categories_list = [
		{
			id: 1,
			name: "Home & Garden",
			slug: "home & garden",
			order: 1,
			parentCategory: "",
			sellerType: "Post an announcement",
			description: "post an announcement",
			image: ""
		},
		{
			id: 2,
			name: "Sell something",
			slug: "sell something",
			order: 2,
			parentCategory: "",
			sellerType: "Buy",
			description: "buy",
			image: ""
		},
		{
			id: 3,
			name: "Rent room",
			slug: "rent room",
			order: 3,
			parentCategory: "",
			sellerType: "Post an announcement",
			description: "rent room",
			image: ""
		},
		{
			id: 4,
			name: "List your service",
			slug: "list your service",
			order: 4,
			parentCategory: "",
			sellerType: "Post an announcement",
			description: "list your service",
			image: ""
		},
		{
			id: 5,
			name: "Rent an item",
			slug: "rent an item",
			order: 5,
			parentCategory: "",
			sellerType: "Post an announcement",
			description: "Rent an item",
			image: ""
		}
	] 
	return { type: actionTypes.ADMIN_SET_CATEGORIES, payload: { "categories": categories_list} } 
}

export const fetchPricingModles = () => {
	const response = {
		pricing_models: [
			{
				id: 1,
				name: "List something",
				seller_label: "Post an announcement",
				widget_type: "Request",
				unit_name: "unit",
				quantiry_label: "quantity",
				duration: ""
			},
			{
				id: 2,
				name: "Buy",
				seller_label: "Sell something",
				widget_type: "Buy",
				unit_name: "item",
				quantiry_label: "quantity",
				duration: ""
			},
			{
				id: 3,
				name: "Book Room",
				seller_label: "Rent room",
				widget_type: "Book a Date",
				unit_name: "room",
				quantiry_label: "Rooms",
				duration: "Night"
			},
			{
				id: 4,
				name: "Book Session",
				seller_label: "List your service",
				widget_type: "Book a Time",
				unit_name: "place",
				quantiry_label: "Spaces per session",
				duration: ""
			},
			{
				id: 5,
				name: "Rent Item",
				seller_label: "Rent an item",
				widget_type: "Book a Date",
				unit_name: "item",
				quantiry_label: "inventory",
				duration: ""
			},
			{
				id: 6,
				name: "Request",
				seller_label: "Post an announcement",
				widget_type: "Request",
				unit_name: "unit",
				quantiry_label: "quantity",
				duration: "Day"
			},
			{
				id: 7,
				name: "Job offer",
				seller_label: "Job offer",
				widget_type: "Buy",
				unit_name: "unit",
				quantiry_label: "quantity",
				duration: ""
			},
			{
				id: 8,
				name: "Job search",
				seller_label: "Job search",
				widget_type: "Buy",
				unit_name: "unit",
				quantiry_label: "quantity",
				duration: ""
			},
		]
	}

	return { type: "ADMIN_SET_PRICING_MODELS", payload: { pricing_models: response.pricing_models } }
}
