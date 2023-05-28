import {classNames} from 'shared/lib/helpers/classNames/classNames';
import cls from './NavBar.module.scss';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'shared/ui/ ThemeSwitcher';
import React from 'react';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};