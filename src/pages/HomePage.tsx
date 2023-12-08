import MetaHeader from '@app/components/MetaHeader';
import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
    return (
        <>
            <MetaHeader title="Home Page" />
            <h1>Welcome Admins!</h1>
            <p>
                Welcome to the ShyBye Admin Tool. This tool was create to allow
                non-devs the ability to access ShyBye backend resources. If you
                require access to this tool, please contact a member of the
                Backend Team.
            </p>
            <Link to="/log-in">
                <Button size="lg">Log In</Button>
            </Link>
        </>
    );
};

export default HomePage;
