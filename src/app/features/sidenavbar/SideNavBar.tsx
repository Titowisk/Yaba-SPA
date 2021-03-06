import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const SideNavBar = () => {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item as={NavLink} exact to="/" name="home" />
        <Menu.Item as={NavLink} to="/banks" name="Bank Menu" />
        <Menu.Item as={NavLink} to="/transactions" name="Transactions" />
      </Menu>
    </div>
  );
};
