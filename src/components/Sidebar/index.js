import React from "react";
import { ProSidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LaptopIcon from '@material-ui/icons/Laptop';
import WatchIcon from '@material-ui/icons/Watch';
import './custom.scss';
import './index.css';

export default function Sidebar() {

    return (
        <div style={{heigh:'auto'}}>
            <ProSidebar collapsed={false}>
                <Menu className="sidebarColor">
                    <MenuItem className="SidebarMeniItem" icon={<TvIcon />} ><Link to="#"/>TV</MenuItem>
                    <MenuItem className="SidebarMeniItem" icon={<LaptopIcon />}>Laptop</MenuItem>
                    <MenuItem className="SidebarMeniItem" icon={<SmartphoneIcon />}>Phone</MenuItem>
                    <SubMenu className="SidebarMeniItem" title="Watch" icon={<WatchIcon/>}>
                        <MenuItem className="SidebarMeniItem">Digital
                            <Link to="#"/>
                        </MenuItem>
                        <MenuItem className="SidebarMeniItem">Mechanical</MenuItem>
                        <MenuItem className="SidebarMeniItem">Smartwatches</MenuItem>
                        <MenuItem className="SidebarMeniItem">Sport</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
}