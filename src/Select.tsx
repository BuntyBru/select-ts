type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  onChange: (value: SelectOptions | undefined) => void;
  value?: SelectOptions | undefined;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return <div className="container"></div>;
};

export default Select;
