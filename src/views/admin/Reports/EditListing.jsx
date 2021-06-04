import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../../redux/actions/admin/actCategories";

import { TextInput, SelectInput, DateInput } from "components/InputForms";

function EditListing({ setCategories }) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [expires_at, setExpires] = useState(new Date());
  const [status, setStatus] = useState("");
 
	const [categories_list, setCategoriesList] = useState([]);

	useEffect(() => {
		console.log(expires_at)
		const categories_list_wrapper = fetchCategories();	
		setCategoriesList(categories_list_wrapper.payload.categories);
		setCategories(categories_list_wrapper);
	}, []);

	const status_list = [
		{ name: "Activated" },
		{ name: "Disabled" }
	]
	
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
						<div className="rounded-t bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between">
								<h6 className="text-gray-800 text-xl font-bold">Editing Listing</h6>
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
										<TextInput label = "Title" type = "text" onChange={ (e) => setTitle(e.target.value) } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<SelectInput label = "Category" value="Rent room" onChange={ (e) => setCategory(e.target.value) } options={ categories_list } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<SelectInput label = "Status" defaultValue="Activated" onChange={ (e) => setStatus(e.target.value) } options={ status_list } />
									</div>
									<div className="w-full lg:w-12/12 px-4">
										<DateInput label = "Expires at" onChange={ (value) => setExpires(value) } value={ expires_at } />
									</div>
								</div>
							</form>
						</div>
					</div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCategories: (categories) => dispatch(categories)
	}
}

export default connect(null, mapDispatchToProps)(EditListing);
