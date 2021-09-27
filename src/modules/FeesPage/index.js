import React from 'react';
import Album from './Gallery';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Navigation/Header";
import StickyFooter from "../Navigation/Footer";
import CustomSlider from '../../components/CustomSlider';
import { useEffect, useState } from 'react';
import { ProSidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useParams, useHistory } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import LaptopIcon from '@material-ui/icons/Laptop';
import WatchIcon from '@material-ui/icons/Watch';
import '../../components/Sidebar/custom.scss';
import '../../components/Sidebar/index.css';

const useStyles = makeStyles(() => ({
    display: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '98%',
        padding: 0,
        marginTop: '40px',
    },
}));

const content = [
    { title: 'Leading technical solutions for a sustainable tomorrow', description: 'This is Wholesales Revolution', image: 'https://source.unsplash.com/random' },
    { title: 'Second item', description: 'Lorem ipsum', image: 'https://source.unsplash.com/random' }
];

export default function FeeContent() {
    const classes = useStyles();
    const { type, subType } = useParams();
    const history = useHistory();
    const [fees, setFees] = useState([]);


    useEffect(() => {
        const localFees = localStorage.getItem('fees');
        const allFees = JSON.parse(localFees);
        if (type) {
            
            const filteredFees = allFees.filter(item => item.type === type);
            setFees(filteredFees);
        } else {
            setFees(allFees);
        }
    }, [type, subType])

    const HandleCpecificType = (type) => {
        history.push(`/fees/${type}`)
    }

    const HandleCpecificSubType = (type, subType) => {
        history.push(`/fees/${type}/${subType}`)
    }

    return <div>
        <Header isHomePage={true} />
        <CustomSlider content={content} />
        <Container className={classes.display}>
            <div>
                <div className="flexBoxTittle">
                    <h1 className="tittleStyle">New fees</h1>
                    <h4 className="subTittleStyle">124 fees </h4>
                </div>
                <div style={{ heigh: 'auto' }}>
                    <ProSidebar collapsed={false}>
                        <Menu className="sidebarColor">
                            <MenuItem className="SidebarMeniItem" icon={<TvIcon />} onClick={() => HandleCpecificType('TV')} >TV</MenuItem>
                            <MenuItem className="SidebarMeniItem" icon={<LaptopIcon />} onClick={() => HandleCpecificType('Laptop')}>Laptop</MenuItem>
                            <MenuItem className="SidebarMeniItem" icon={<SmartphoneIcon />} onClick={() => HandleCpecificType('Phone')}>Phone</MenuItem>
                            <SubMenu className="SidebarMeniItem" title="Watch" icon={<WatchIcon />}>
                                <MenuItem className="SidebarMeniItem" onClick={() => HandleCpecificSubType('Watch', 'Digital')}>Digital</MenuItem>
                                <MenuItem className="SidebarMeniItem" onClick={() => HandleCpecificSubType('Watch', 'Mechanical')}>Mechanical</MenuItem>
                                <MenuItem className="SidebarMeniItem" onClick={() => HandleCpecificSubType('Watch', 'Smartwatches')}>Smartwatches</MenuItem>
                                <MenuItem className="SidebarMeniItem" onClick={() => HandleCpecificSubType('Watch', 'Sport')}>Sport</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                </div>
            </div>
            <Album data={fees} type={subType ? `${type}/${subType}` : type} />
        </Container>
        <StickyFooter />
    </div>
}
