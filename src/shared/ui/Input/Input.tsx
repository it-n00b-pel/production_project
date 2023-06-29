import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string,
    onChange?:(value: string)=> void,
    autofocus?: boolean,
}

export const Input = memo((props: InputProps) => {
    const [isFocused, setFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>();

    const {
        className,
        value,
        onChange,
        autofocus,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setFocused(false);
    };

    const onFocus = () => {
        setFocused(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}

            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onSelect={onSelect}
                />

                {isFocused
                    && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 8}px` }}
                        />
                    )}
            </div>
        </div>
    );
});
