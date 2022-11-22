import React from 'react';
import styles from './select.module.scss';

type SelectOptions = {
  label: string;
  value: number;
};

type SelectProps = {
  options: SelectOptions[];
  onChange: (value: SelectOptions | undefined) => void;
  value?: SelectOptions | undefined;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClickFn = (event: React.MouseEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.target);
  };
  return (
    <div
      className={styles['select-container']}
      onBlur={() => {
        setIsOpen(false);
      }}>
      <input
        readOnly={true}
        className={styles['select-container__inputBox']}
        value={value?.label}
        onFocus={() => {
          setIsOpen(prev => !prev);
        }}
      />
      <ul
        className={`${styles['select-container__optionsBox']} ${
          isOpen
            ? styles['select-container__optionsBox--show']
            : styles['select-container__optionsBox--hide']
        }`}
        onClick={event => {
          onClickFn(event);
        }}>
        {options?.map(option => (
          <li key={option?.value}>{option?.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
