import DiscordAuth from '@app/components/auth/DiscordAuth';
import NavigationLink from '@app/components/layout/NavigationLink';
import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar: FC = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    React APP
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavigationLink to="/">Home</NavigationLink>
                        <NavigationLink to="/dashboard">
                            Dashboard
                        </NavigationLink>
                    </Nav>
                    <DiscordAuth />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
