import { Form } from "react-bootstrap";

interface Props {
  disabled: boolean;
  onChange: Function;
  options: {
    label: string;
    value: string | number;
  }[];
  className?: string;
  value: any;
}

const Select = ({ disabled, onChange, options, className, value }: Props) => {
  return (
    <div>
      <Form.Select
        className={className}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {options && options.length !== 0 && options
          ? options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))
          : null}
      </Form.Select>
    </div>
  );
};

export default Select;
