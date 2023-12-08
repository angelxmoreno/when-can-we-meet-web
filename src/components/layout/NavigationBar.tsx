import NavigationLink from '@app/components/layout/NavigationLink';
import UserStore from '@app/stores/AuthStore';
import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavigationBar: FC = () => {
    const isLoggedIn = UserStore.useState(s => s.isLoggedIn);
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    React APP
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavigationLink to="/">Home</NavigationLink>
                        <NavigationLink to="/dashboard">
                            Dashboard
                        </NavigationLink>
                    </Nav>
                    <Nav>
                        {!isLoggedIn && (
                            <>
                                <NavigationLink to="/log-in">
                                    Log In
                                </NavigationLink>
                                <NavigationLink to="register">
                                    Register
                                </NavigationLink>
                            </>
                        )}
                        {isLoggedIn && <button />}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
