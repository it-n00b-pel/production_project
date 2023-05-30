import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink to="/" className={cls.mainLink}>Main</AppLink>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink to="/about">About</AppLink>
        </div>
    </div>
);
