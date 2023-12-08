import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';

const Footer: FC = () => {
    return (
        <footer className="py-5 bg-dark">
            <Container className="px-4 px-lg-5">
                <p className="m-0 text-center text-white">
                    Copyright © Your Website 2023
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
