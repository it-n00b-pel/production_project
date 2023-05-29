import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from 'shared/lib/helpers/classNames/classNames';
import {AppRouter} from 'app/providers/routes';
import {NavBar} from 'widgets/ui/NavBar';
import {SideBar} from 'widgets/ui/SideBar';


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar/>
                <div className={'content-page'}>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;