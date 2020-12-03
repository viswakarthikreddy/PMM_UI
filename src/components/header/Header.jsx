import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routes } from '../../config/routes.config';
import { HeaderWrapper } from './HeaderStyle';
import logo from './logo.png';

const Header = () => (
    <>
        <HeaderWrapper fluid>
            <Row>
                <Col className="text-left">
                    <Row>
                        <Col md="3">
                            <img src={logo} alt="" className="logo"/>
                        </Col>
                        <Col md="9">
                            <h2 className="logo-title">
                                Restaurent Development
                                <span>Dashboard</span>
                            </h2>
                        </Col>
                    </Row>
                    
                </Col>
                <Col>
                    <Nav activeKey="/explore">
                        {
                            routes.map(route => (
                                <Nav.Item key={route.path}>
                                    <NavLink to={route.path} activeClassName="selected">{route.label}</NavLink>
                                </Nav.Item>
                            ))
                        }
                        <Nav.Item className="profile-link-wrapper">
                            <div className="profile-link">
                                RH
                            </div>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </HeaderWrapper>
   </>
);

export default Header;