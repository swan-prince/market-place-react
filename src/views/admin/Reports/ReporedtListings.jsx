import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import { fetchListings } from "../../../redux/actions/admin/actReports";

import { AdminDropdownBtn } from "components/Dropdowns";

function ReporedtListings ({ setListings }) {

	const history = useHistory();
	const [listings_list, setListingsList] = useState([]);
	
	useEffect(() => {
		const listingWrapper = fetchListings();
		setListingsList(listingWrapper.payload.listings);
		setListings(listingWrapper);
	}, [])

	const deleteHandle = () => {
		console.log("delete function");
	}

  return (
		<>
			<div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className="font-semibold text-lg text-gray-800">
                    Listings
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      no
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Title
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      User
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    listings_list.map((listing, index) => 
                      <tr key={ index }>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { index + 1 }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                            { listing.title }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { listing.user }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4 text-right">
                          <AdminDropdownBtn editLink = { `/admin/reports/listings/${listing.id}/edit` } deleteHandle={ deleteHandle } />
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
		setListings: (listingWrapper) => dispatch(listingWrapper)
	}
}

export default connect(null, mapDispatchToProps)(ReporedtListings);