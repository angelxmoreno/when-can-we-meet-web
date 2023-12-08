import { router } from '@app/config/routes';
import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

export default App;
