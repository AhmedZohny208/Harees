import React, { useEffect } from "react";
import { Menu, Dropdown, Avatar, message } from "antd";
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from "react-router-dom";
import { 
  // EditOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { logout } from '../../redux/actions/Auth';
import { getProfileData } from "redux/actions/Profile";
import { AUTH_PREFIX_PATH } from 'configs/AppConfig';

const menuItem = [
	// {
  //   title: "Edit Profile",
  //   icon: EditOutlined ,
  //   path: "/"
  // }
]

export default function NavProfile() {
  // let history = useHistory();
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.profileData)

  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem("HaressOwnerjwtToken");
    message.success('Logged out successfully.');
  }
  useEffect(() => {
    dispatch(getProfileData())
  }, [dispatch])

  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      {user && (
        <div className="nav-profile-header">
          <div className="d-flex">
            <Avatar size={45} src={user.profilePicturePath} />
            <div className="pl-3">
              <h4 className="mb-0">{user.fullName}</h4>
              <span className="text-muted">{user.userTitle}</span>
            </div>
          </div>
        </div>
      )}
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={logoutHandler}>
            <a href={`${AUTH_PREFIX_PATH}/auth`}>
              <LogoutOutlined />
              <span className="font-weight-normal">Sign Out</span>
            </a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          {user && <Avatar src={user.profilePicturePath} />}
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}
