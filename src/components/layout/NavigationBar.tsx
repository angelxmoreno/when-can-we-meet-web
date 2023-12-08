import NavigationLink from '@app/components/layout/NavigationLink';
import UserStore from '@app/stores/AuthStore';
import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar: FC = () => {
    const isLoggedIn = UserStore.useState(s => s.isLoggedIn);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>React APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavigationLink to="/">Home</NavigationLink>
                        <NavigationLink to="/dashboard">
                            Dashboard
                        </NavigationLink>
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
