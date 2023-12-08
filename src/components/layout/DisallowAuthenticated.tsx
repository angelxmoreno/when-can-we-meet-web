import UserStore from '@app/stores/AuthStore';
import React, { FC, PropsWithChildren, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const DisallowAuthenticated: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();
    const isLoggedIn = UserStore.useState(s => s.isLoggedIn);

    useLayoutEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, []);

    return <Outlet />;
};

export default DisallowAuthenticated;
