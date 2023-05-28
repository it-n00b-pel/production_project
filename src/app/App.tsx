import React from 'react';
import './styles/index.scss';
import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProviders';
import {classNames} from 'shared/lib/helpers/classNames/classNames';
import {AppRouter} from 'app/providers/routes';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <AppRouter/>
        </div>
    );
};

export default App;