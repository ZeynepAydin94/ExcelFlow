// src/components/ui/Button.jsx
const Button = ({ children, variant = "primary", size = "", disabled, onClick, type = "button" }) => {
    return (
        <button
            className={`btn btn-${variant} ${size ? `btn-${size}` : ""}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;