import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    onClose: ()=> void
}

export const LoginModal = ({ className, onClose, isOpen }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        onClose={onClose}
        isOpen={isOpen}
        lazy
    >
        <LoginForm />
    </Modal>
);
