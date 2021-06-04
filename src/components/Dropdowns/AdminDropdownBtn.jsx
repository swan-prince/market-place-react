import React from "react";
import { createPopper } from "@popperjs/core";
import { useHistory } from 'react-router-dom';

const AdminDropdownBtn = (props) => {
  // dropdown props
  
  const history = useHistory();

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
        className="text-gray-600 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={ (e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        } }
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={ popoverDropdownRef }
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button
          onClick={ () => history.push(`${props.editLink}`) }
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left"
          }
        >
          Edit
        </button>
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left"
          }
          onClick={ (e) => { closeDropdownPopover(); props.deleteHandle() } }
        >
          Delete
        </button> 
      </div>
    </>
  );
};

export default AdminDropdownBtn;
