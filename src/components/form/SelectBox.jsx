// src/components/ui/SelectBox.jsx
const SelectBox = ({ label, id, options, value, onChange }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={id}>{label}</label>
            <select className="form-control" id={id} value={value} onChange={onChange}>
                <option value="">Seçiniz</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectBox;