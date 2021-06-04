import React, { useState, useEffect } from "react";

import { TextInput, SelectInput } from "components/InputForms";

export default function EditUser() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-gray-800 text-xl font-bold">Editing user</h6>
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form>
                <div className="flex flex-wrap mt-5">
                  <div className="w-full lg:w-12/12 px-4">
                    <TextInput label = "Username" type = "text" name="username" onChange={ (e) => setUsername(e.target.value) } />
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <TextInput label = "Email Address" type = "email" name="email" onChange={ (e) => setEmail(e.target.value) } />
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <TextInput label = "New password" type = "password" name="password" onChange={ (e) => setPassword(e.target.value) } />
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Role</label>
                      <select className="form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" id="userRole">
                          <option>Individual</option>
                          <option>Business</option>
                      </select>
                    </div>
                    {/* <SelectInput options={ seller_list } label="Seller listing type" onChange={ (e) => setSellerType(e.target.value) } /> */}
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Status</label>
                      <select className="form-control px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" id="userStatus">
                          <option>Blocked</option>
                          <option>Activated</option>
                      </select>
                    </div>
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
