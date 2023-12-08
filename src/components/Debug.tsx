import React, { FC } from 'react';

const Debug: FC<{ data: any }> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Debug;
