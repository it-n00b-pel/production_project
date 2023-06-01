import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
