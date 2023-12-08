import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Location } from 'react-router-dom';

type MetaHeaderProps = {
    title?: string;
    description?: string;
    uri?: string;
};
const urlBase = process.env.PUBLIC_URL || 'https://localhost:3000';
function buildCanonical<State = any>(location: Location<State> | string) {
    const url = new URL(urlBase);

    if (typeof location === 'string') {
        url.pathname = url.pathname + location;
    } else {
        const { pathname, search, hash } = location;
        url.pathname = url.pathname + pathname;
        url.search = search;
        url.hash = hash;
    }
    return url.toString();
}
const MetaHeader: FC<MetaHeaderProps> = ({ title, description, uri }) => {
    const location = useLocation();
    const canonical = buildCanonical(uri || location);
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
};

export default MetaHeader;
