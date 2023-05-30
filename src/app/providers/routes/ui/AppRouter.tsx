import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (

                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />

            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
