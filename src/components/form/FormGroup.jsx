const FormGroup = ({ children, className = "" }) => {
    return <div className={`form-group mb-3 ${className}`}>{children}</div>;
};

export default FormGroup;