const Button = ({
    children,
    variant = "primary",
    size = "",
    type = "button",
    onClick,
    disabled = false,
    loading = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} ${size ? `btn-${size}` : ""} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? "Yükleniyor..." : children}
        </button>
    );
};

export default Button;