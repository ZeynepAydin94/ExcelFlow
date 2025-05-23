// src/components/ui/FormGroup.jsx
const FormGroup = ({ label, id, value, onChange, type = "text", required = false }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default FormGroup;