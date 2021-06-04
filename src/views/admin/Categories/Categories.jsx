import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import { fetchCategories } from "redux/actions/admin/actCategories";

import { AdminDropdownBtn } from "components/Dropdowns";
import { AdminButton } from "components/Buttons";

function Categories({ setCategories }) {

	const history = useHistory();

	const [categories_list, setCategoriesList] = useState([]);

	useEffect(() => {
		const categories_list_wrapper = fetchCategories();	
		setCategoriesList(categories_list_wrapper.payload.categories);
		setCategories(categories_list_wrapper);
	}, [])

	const deleteHandle = () => {
		console.log("delete handle")
	}

	return(
		<>
			<div className="flex flex-wrap mt-4">
        <div className="relative w-full mb-3 px-4 text-right">
          {/* <button onClick={ () => history.push("/admin/category/create") } className="btn btn-primary btn-lg mr-2" role="button" aria-disabled="true">Add</button> */}
					<AdminButton text="Add" onClick={ () => history.push("/admin/category/create") } />
        </div>
        <div className="w-full mb-12 px-4">
					<div
					className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
						<div className="rounded-t mb-0 px-4 py-3 border-0">
							<div className="flex flex-wrap items-center">
								<div className="relative w-full px-4 max-w-full flex-grow flex-1">
									<h3
										className="font-semibold text-lg text-gray-800">
										Category List
									</h3>
								</div>
							</div>
						</div>
						<div className="block w-full overflow-x-auto">
							<table className="items-center w-full bg-transparent border-collapse">
								<thead>
									<tr>
										<th
											className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
											Name
										</th>
										<th
											className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"></th>
									</tr>
								</thead>
								<tbody>
									{
										
										categories_list.map((category, index) => 
											<tr key={ index }>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
														{ category.name }
												</td>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4 text-right">
													<AdminDropdownBtn editLink = { `/admin/category/${category.id}/edit` } deleteHandle={ deleteHandle } />
												</td>
											</tr>
										)
									}
								</tbody>
							</table>
						</div>
					</div>
        </div>
      </div>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCategories: (categories) => dispatch(categories)
	}
}

export default connect(null, mapDispatchToProps)(Categories);
