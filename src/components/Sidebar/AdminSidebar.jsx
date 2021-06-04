import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import AdminLinkItem from "./AdminLinkItem";

export default function AdminSidebar() {

  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const users_links = [
    { title: "Users", link: "/admin/users" },
    { title: "Roles", link: "/admin/roles" }
  ]
  const moderates_links = [
    { title: "Users", link: "/admin/moderate-users" },
    { title: "Listings", link: "/admin/moderate-listings" },
    { title: "Report Types", link: "/admin/moderate-report-types" }
  ]
  const categories_links = [
    { title: "categories", link: "/admin/categories" },
    { title: "Fields & Filters", link: "/admin/fields" },
    { title: "Pricing Models", link: "/admin/pricing-models" }
  ]
  const settings_links = [
    { title: "General Settings", link: "/admin/settings" },
    { title: "Languages", link: "/admin/languages" },
    { title: "Meta Tags", link: "/admin/meta-tags" },
    { title: "Block List", link: "/admin/blocklist" }
  ]
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-color-1 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <a
            className="md:block text-left md:pb-2 text-gray-400 text-white mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
            onClick={ (e) => { e.preventDefault() } }
          >
            Notus React
          </a>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-color-1 hover:text-gray-600")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
              <AdminLinkItem title="Users" icon="fa fa-users" children = { users_links } />
              <AdminLinkItem title="Moderate" icon="fas fa-tags" children = { moderates_links } />
              <AdminLinkItem title="Categories" icon="fas fa-edit" children = { categories_links } />
              <AdminLinkItem title="Settings" icon="fas fa-tools" children = { settings_links } />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
