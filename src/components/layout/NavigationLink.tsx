import React, { FC, PropsWithChildren } from 'react';
import { NavLink, To } from 'react-router-dom';

type Props = {
    to: To;
};
const NavigationLink: FC<PropsWithChildren<Props>> = ({ to, children }) => {
    return (
        <NavLink to={to} className="nav-link">
            {children}
        </NavLink>
    );
};

export default NavigationLink;
