import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchReportedUsers } from "../../../redux/actions/admin/actReports";

import { AdminDropdownBtn } from "components/Dropdowns";

function ReportedUsers ({ setReportedUsers }) {

	const [users_list, setUsersList] = useState([]);

	useEffect(() => {
		const reportedUsersWrapper = fetchReportedUsers();
    setUsersList(reportedUsersWrapper.payload.users);
    setReportedUsers(reportedUsersWrapper);
	}, [])

	const deleteHandle = () => {
		console.log("delete function")
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
                    Users
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
                      Name
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Email
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Role
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Status
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">
                      Count
                    </th>
                    <th
                      className="px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    users_list.map((user, index) => 
                      <tr key={ index }>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { index + 1 }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                            { user.name }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { user.email }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { user.role }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          <span className={ "badge " + (user.status == "blocked" ? "badge-danger": "badge-success") }>{ user.status }</span>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4">
                          { user.count }
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-no-wrap p-4 text-right">
                          <AdminDropdownBtn editLink = { `/admin/reports/users/${user.id}/edit` } deleteHandle={ deleteHandle } />
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
    setReportedUsers: (reportedUsersWrapper) => dispatch(reportedUsersWrapper)
  }
}

export default connect(null, mapDispatchToProps)(ReportedUsers);
