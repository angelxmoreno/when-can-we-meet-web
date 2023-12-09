import useSupabaseAuth from '@app/hooks/useSupabaseAuth';
import React, { FC } from 'react';
import { Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { DiscordLoginButton } from 'react-social-login-buttons';
import { toast } from 'react-toastify';

const DiscordAuth: FC = () => {
    const navigate = useNavigate();
    const { loginWithDiscord, logOut, session } = useSupabaseAuth();
    const handleLogIn = async () => {
        const { error } = await loginWithDiscord();
        if (error) {
            toast(`Error found: ${error.message}`, {
                type: 'error',
            });
        }
    };

    const handleLogOut = async () => {
        await logOut();
        toast(`Successfully logged out`, { type: 'success' });
        navigate('/');
    };

    return session ? (
        <>
            <Image
                src={session.user.user_metadata.avatar_url}
                width={30}
                className="mt-2 me-2 ms-auto rounded"
            />
            <Navbar.Text>{session.user.user_metadata.full_name}</Navbar.Text>
            <DiscordLoginButton
                size="40px"
                style={{ width: 125 }}
                onClick={handleLogOut}
                text="Log Out"
            />
        </>
    ) : (
        <DiscordLoginButton
            size="40px"
            style={{ width: 250 }}
            onClick={handleLogIn}
            className="ms-auto"
        />
    );
};

export default DiscordAuth;
