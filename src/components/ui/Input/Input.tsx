import styles from './Input.module.css';
import cx from 'classnames';
import { FieldErrorsImpl, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: 'text' | 'email' | 'password' | 'search';
  name?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  required?: boolean;
  children?: string | JSX.Element | JSX.Element[];
  defaultChecked?: boolean;
  registerParams?: UseFormRegisterReturn<string>;
  onChange?: any;
  defaultValue?: string;
}

export const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  label,
  className,
  labelClassName,
  required = false,
  children,
  defaultChecked,
  registerParams,
  onChange,
  defaultValue,
}: Props) => {
  return (
    <label className={cx(styles.inputComponent, labelClassName)}>
      {label}
      <input
        className={cx(styles.inputComponent__input, className)}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        defaultChecked={defaultChecked}
        onChange={onChange}
        defaultValue={defaultValue}
        {...registerParams}
      />
      {children}
    </label>
  )
}