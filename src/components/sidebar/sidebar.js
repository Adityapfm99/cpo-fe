import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLaptopCode,FaKey,FaUserAlt,FaLock, FaFile, FaIndustry, FaChartPie } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  // added styles 
  const history = useHistory()
  // console.log(history.location.pathname === "/dashboard");
  // const height = history.location.pathname === "/dashboard" ? "auto" : "100vh"
  const styles = {
    sideBarHeight: {
      position: "fixed",
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
        <MenuItem onClick={() => history.push('/dashboard')} icon={<FaChartPie />}> Dashboard</MenuItem>
        <SubMenu title="Account" icon={<FaUserAlt />}>
          <MenuItem onClick={() => history.push('/register')}icon={<FaKey />}>Create Account</MenuItem>
          <MenuItem onClick={() => history.push('/forgot')}icon={<FaLock />}>Change Password</MenuItem>
        </SubMenu>
        <MenuItem onClick={() => history.push('/dataIndustry')} icon={<FaIndustry />}>Factory</MenuItem>
        <SubMenu title="Reports" icon={<FaLaptopCode />}>
        <MenuItem onClick={() => history.push('/productionGroup')} icon={<FaFile />}>Group Production Report</MenuItem>
        <MenuItem onClick={() => history.push('/productionPT')} icon={<FaFile />}>PT Production Report</MenuItem>
        <MenuItem onClick={() => history.push('/productionIndustry')} icon={<FaFile />}>Industry Production Report</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;