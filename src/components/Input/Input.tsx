import styles from './Input.module.css';

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type: 'text' | 'tel' | 'email' | 'textarea' | 'select';
  required?: boolean;
  options?: {
    label: string;
    value: string;
  }[];
}
export const Input = (
  { label, type, name, value, onChange, placeholder, required = false, options }
  : InputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const renderInput = () => {
      switch (type) {
        case 'select':
          return (
            <select id={name} name={name} value={value} required={required} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          );
        case 'textarea':
          return (
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
              placeholder={placeholder}
              required={required}
              rows={3}
            />
          );
        default:
          return (
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
            />
          );
      }
    };

    return (
      <div className={styles.input}>  
        <label className={styles.label} htmlFor={name}>{label}</label>
        {renderInput()}
      </div>
  );
};