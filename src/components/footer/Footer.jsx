import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FooterWrapper, CopyrightWrapper } from './FooterStyle';

const Footer = () => (
    <FooterWrapper>
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className="footer-menu" horizontal={'md'}>
                        <ListGroup.Item>Contact Us</ListGroup.Item>
                        <ListGroup.Item>FAQ</ListGroup.Item>
                        <ListGroup.Item>Privacy Policy</ListGroup.Item>
                        <ListGroup.Item>Terms of use</ListGroup.Item>
                        <ListGroup.Item>Cookies and Ads</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        <CopyrightWrapper>
            &copy; Copyright 2020. All rights reserved.
        </CopyrightWrapper>
    </FooterWrapper>
);

export default Footer;