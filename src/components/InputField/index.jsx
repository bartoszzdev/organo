import './inputField.css';

const InputField = ({ type, value, setValue, label, placeholder, required }) => {
    const handleValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={`field field-${type}`}>
            <label htmlFor="">
                { label }
            </label>
            
            <input 
                type={type} 
                placeholder={placeholder} 
                required={required}
                value={value} 
                onChange={handleValue} 
            />
        </div>
    )
};

export default InputField;