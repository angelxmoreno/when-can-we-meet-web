import NavigationBar from '@app/components/layout/NavigationBar';
import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
    return (
        <Container fluid>
            <NavigationBar />
            <Container>
                <Outlet />
            </Container>
        </Container>
    );
};

export default RootLayout;
