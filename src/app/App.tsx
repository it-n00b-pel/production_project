import React from 'react';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from 'shared/lib/helpers/classNames/classNames';
import {AppRouter} from 'app/providers/routes';
import {NavBar} from 'widgets/NavBar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    );
};

export default App;