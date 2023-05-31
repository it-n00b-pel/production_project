import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('ds-roller', {}, [className])}>
        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
