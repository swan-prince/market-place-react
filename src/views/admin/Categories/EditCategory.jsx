import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchPricingModles } from "redux/actions/admin/actCategories";

import { TextInput, SelectInput, TextareaInput, FileInput } from "components/InputForms";

function EditCategory ({ categories, setPricingModels }) {

	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [order, setOrder] = useState("");
	const [parentCategory, setParentCategory] = useState("");
	const [sellerType, setSellerType] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	const [seller_type_list, setSellerListType] = useState([]);
	const [categories_list, setCategoriesList] = useState([]);

	useEffect(()=> {
		const sellerListWrapper = fetchPricingModles();
		setSellerListType(sellerListWrapper.payload.pricing_models);
		setCategoriesList(categories); 
		setPricingModels(sellerListWrapper);
	}, [])

	return (
		<>
			<div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
						<div className="rounded-t bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between">
								<h6 className="text-gray-800 text-xl font-bold">Editing category</h6>
								<button
									className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
									type="button"
								>
									Submit
								</button>
							</div>
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<form>
								<div className="flex flex-wrap mt-5">
									<div className="w-full lg:w-12/12 px-4">
										<TextInput label = "Name" type = "text" name="name" defaultValue={ name } onChange={ (e) => setName(e.target.value) } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<TextInput label = "Slug" type = "text" name="slug" defaultValue={ slug } onChange={ (e) => setSlug(e.target.value) } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<TextInput label = "Order" type = "number" name="order" defaultValue={ order } onChange={ (e) => setOrder(e.target.value) } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label className="block uppercase text-gray-700 text-xs font-bold mb-2">Parent category</label>
											<select 
												onChange = { (e) => setParentCategory(e.target.value) }
												className="form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
												>
													<option>--SELECT--</option>
													{
														categories_list.map((category, index) => (
															<option key={ index } value={ category.name } >{ category.name }</option>
														))
													}
											</select>
										</div>
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label className="block uppercase text-gray-700 text-xs font-bold mb-2">Seller listing type</label>
											<select 
												onChange={ (value) => setSellerType(value) }
												className="form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
												>
													{
														seller_type_list.map((seller_type, index) => (
															<option key={ index } value={ seller_type.seller_label } >{ seller_type.seller_label }</option>
														))
													}
											</select>
										</div>
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<TextareaInput label="Description" onChange={ (e) => setDescription(e.target.value) } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<FileInput label="Image" name="image" onChange={ (e) => setImage(e.target.value)  } />
									</div>
								</div>
							</form>
						</div>
					</div>
        </div>
      </div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		categories: state.adminCategories.categories
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPricingModels: (sellerListWrapper) => dispatch(sellerListWrapper)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
