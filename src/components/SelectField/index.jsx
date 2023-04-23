import './selectField.css';

const SelectField = ({ value, setValue, label, itens, required }) => {
    return (
        <div className="select-field">
            <label>{label}</label>
            <select required={required} value={value} onChange={(e) => setValue(e.target.value)}>
                <option value=""></option>
                {itens.map((item, index) => {
                    return <option key={index} value={item}>{ item }</option>
                })}
            </select>
        </div>
    )
}

export default SelectField