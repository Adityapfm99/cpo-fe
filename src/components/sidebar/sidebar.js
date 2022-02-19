import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart,FaKey,FaEmpire,FaUserAlt } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaUserAlt />}>Account</MenuItem>
        <MenuItem icon={<FaKey />}>Change Password</MenuItem>
        <MenuItem icon={<FaEmpire />}>Factory</MenuItem>
        <SubMenu title="Reports" icon={<FaHeart />}>
          <MenuItem>Dashboard Report</MenuItem>
          <MenuItem>Production Group Report</MenuItem>
          <MenuItem>PT Group Report</MenuItem>
          <MenuItem>Factory Group Report</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;