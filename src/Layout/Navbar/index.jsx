import React from "react";
import { useSelector } from "react-redux";
import { NavItem } from "./NavItem";
import "./styles.css";
export const Navbar = () => {
  const { cities } = useSelector((state) => state.cities);

  return (
    <nav className="navigation_bar">
      <ul className="navigation_list">
        {cities.map((city, index) => {
          if (index === 0) {
            return (
              <NavItem
                label={city.location.name}
                link={""}
                key={index}
                index={index}
              />
            );
          }

          return (
            <NavItem
              label={city.location.name}
              link={city.location.name}
              key={index}
              index={index}
            />
          );
        })}
        <NavItem label={"+"} link={"new"} />
      </ul>
    </nav>
  );
};
