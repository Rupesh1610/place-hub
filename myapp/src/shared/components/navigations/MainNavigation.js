import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../UIElements/Backdrop';
import MainHeader from './MainHeader';
import './MainNavigation.css'
import Navlinks from './Navlinks';
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            {isDrawerOpen && <Backdrop onClick={closeDrawer} />}
            {isDrawerOpen && <SideDrawer onClick={closeDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <Navlinks />
                </nav>
            </SideDrawer>}
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>your places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <Navlinks />
                </nav>
            </MainHeader>
        </>
    );
}

export default MainNavigation;
