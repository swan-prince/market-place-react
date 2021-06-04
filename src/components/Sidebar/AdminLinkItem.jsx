import React, { useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

function AdminLinkItem (props) {

  const { title, link, children, icon } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <li className="items-center cursor-pointer">
        <a
          className={
            "text-xs uppercase py-3 font-bold block text-color-1 "
          }
          onClick={ (e) => { e.preventDefault(); setShow(!show) } }
        >
          <i
            className={
              "mr-2 text-sm " + icon +
              (show ? " text-white" : " text-gray-400")
            }
          ></i>{" "}
          { title }
        </a>
        <ul className={ 
          (show ? "d-block" : "d-none") }>
          
          {
            children ? (
              children.map((child, index) => (
                <li className="text-xs uppercase py-3 font-bold block pl-175-rem" key={ index }>
                  <Link
                      className={
                        "text-xs uppercase font-bold block " +
                        (window.location.href.indexOf(child.link) !== -1
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-color-1 hover:text-gray-600")
                      }
                      to={ child.link }
                    >
                      { child.title }
                  </Link>
                </li>
              ))
            ) : (<></>)
          }
        </ul>
      </li>
    </>
  )
}

export default AdminLinkItem;
