import React from 'react';
import { SidebarWrapper } from './SidebarStyle';

import map from './icons/map.svg';
import customer from './icons/customer.svg';
import bookmap from './icons/bookmap.svg';
import list from './icons/list.svg';
import { Link } from "react-scroll";

const Sidebar = () => {
 
    const links = [
        {
            to: 'pois-summary',
            image: map
        },
        {
            to: 'demographics-summary',
            image: customer
        },
        {
            to: 'trade-area-summary',
            image: bookmap
        },
        {
            to: 'pois-list',
            image: list
        },
    ]
    
    return (
        <SidebarWrapper>
            <nav>
                <ul className="menu-list">
                    {
                        links.map((link, index) => (
                            <li key={`lin_${index}`}>
                                <Link
                                    activeClass="active"
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    containerId="side-content-wrapper"
                                >
                                    <img src={link.image} alt="" />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="side-content-wrapper" id="side-content-wrapper">
                <div id="pois-summary" className="content-section content-map">
                    <div className="title">
                        <h3>Pois summary</h3>
                    </div>
                </div>
                <div id="demographics-summary" className="content-section content-customer">
                    <div className="title">
                        <h3>Demographics summary</h3>
                    </div>
                </div>
                <div id="trade-area-summary" className="content-section content-bookmap">
                    <div className="title">
                        <h3>Trade area summary</h3>
                    </div>
                </div>
                <div id="pois-list" className="content-section content-list">
                    <div className="title">
                        <h3>Pois list</h3>
                    </div>
                </div>
            </div>
        </SidebarWrapper>
    )
}

export default Sidebar;