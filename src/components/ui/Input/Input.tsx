import { text } from 'node:stream/consumers';
import styles from './Input.module.css';
import cx from 'classnames';

type Props = {
  type?: 'text' | 'email' | 'password' | 'search';
  name?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  required?: boolean;
  children?: string | JSX.Element | JSX.Element [];
  defaultChecked?: boolean;
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
}: Props) => {
  return (
    <label className={cx(styles.inputComponent, labelClassName)}>
      {label}
      {children}
      <input
        className={cx(styles.inputComponent__input, className)}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        defaultChecked={defaultChecked}
      />
    </label>
  )
}