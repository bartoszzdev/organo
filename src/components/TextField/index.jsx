import { useState } from 'react';
import './textField.css';

const TextField = ({ value, setValue, label, placeholder, required }) => {
    //const [value, setValue] = useState("")

    const handleValue = (e) => {
        setValue(e.target.value)
        //console.log(label + ": " + value)
    }

    return (
        <div className="text-field">
            <label htmlFor="">
                {label}
            </label>
            <input 
                type="text" 
                placeholder={placeholder} 
                required={required}
                value={value} 
                onChange={handleValue} 
            />
        </div>
    )
};

export default TextField;