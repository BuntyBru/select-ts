import React from 'react';
import styles from './select.module.scss';

type SelectOptions = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOptions[];
  onChange: (value: SelectOptions | undefined) => void;
  value?: SelectOptions | undefined;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles['select-container']}>
      <input
        readOnly={true}
        className={styles['select-container__inputBox']}
        value={value?.label}
        onBlur={() => {
          setIsOpen(false);
        }}
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
      />
      <ul
        className={`${styles['select-container__optionsBox']} ${
          isOpen
            ? styles['select-container__optionsBox--show']
            : styles['select-container__optionsBox--hide']
        }`}>
        {options?.map(option => (
          <li key={option?.value}>{option?.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
