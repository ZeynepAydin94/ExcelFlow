import { useEffect, useRef } from "react";

const TextInput = ({ label, value, onChange, name, type = "text", required = false, autoComplete = "on" }) => {
    const inputRef = useRef();

    // Autofill durumunu yakala
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (inputRef.current?.value && !value) {
                onChange({ target: { value: inputRef.current.value } });
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [onChange, value]);

    return (
        <div className="form-group mb-3">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                ref={inputRef}
                className="form-control"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                required={required}
            />
        </div>
    );
};

export default TextInput;