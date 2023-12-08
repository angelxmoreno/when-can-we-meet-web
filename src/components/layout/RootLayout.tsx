import MetaHeader from '@app/components/MetaHeader';
import Footer from '@app/components/layout/Footer';
import NavigationBar from '@app/components/layout/NavigationBar';
import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
    return (
        <>
            <MetaHeader />
            <NavigationBar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default RootLayout;
