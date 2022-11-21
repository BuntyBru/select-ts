import React from 'react';
import styles from './select.module.css';

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
    <>
      <div
        contentEditable={true}
        onBlur={() => {
          setIsOpen(false);
        }}
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
        className={styles.container}>
        <span className={styles.value}>{value?.label}</span>
        <button className={styles['clear-btn']}>&times;</button>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
          {options.map(option => (
            <li key={option.label} className={styles.option}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
