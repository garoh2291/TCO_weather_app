import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteCity } from "../../../redux/cityReducer/city-reducer";
import "./styles.css";

export const NavItem = ({ label, link, index }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(deleteCity({ label }));
    navigate("/new");
  };
  return (
    <li className="nav-item1">
      <NavLink
        end
        to={`/${link}`}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <span>{label}</span>
      </NavLink>
      {link !== "" && link !== "new" ? (
        <i className="close_icon bx bx-x" onClick={deleteHandle}></i>
      ) : (
        ""
      )}
    </li>
  );
};
