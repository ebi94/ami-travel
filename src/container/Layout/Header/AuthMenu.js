import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import { LOGIN_PAGE, REGISTRATION_PAGE } from 'settings/constant';

const AuthMenu = ({ className }) => {

  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <a href={dashboardUrl + `/login`}>Masuk</a>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={REGISTRATION_PAGE}>Daftar</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default AuthMenu;
