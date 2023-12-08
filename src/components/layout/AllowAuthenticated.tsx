import UserStore from '@app/stores/AuthStore';
import React, { FC, PropsWithChildren, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AllowAuthenticated: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();
    const isLoggedIn = UserStore.useState(s => s.isLoggedIn);

    useLayoutEffect(() => {
        if (!isLoggedIn) {
            navigate('/log-in');
        }
    }, []);

    return <Outlet />;
};

export default AllowAuthenticated;
