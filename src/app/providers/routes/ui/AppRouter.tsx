import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({path, element}) => (
                    <Route key={path}
                           path={path}
                           element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;