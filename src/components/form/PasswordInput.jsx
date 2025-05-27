import TextInput from "./TextInput";

const PasswordInput = ({ label, value, onChange, name = "password", ...rest }) => {
    return (
        <TextInput
            label={label}
            value={value}
            onChange={onChange}
            name={name}
            type="password"
            autoComplete="current-password"
            {...rest}
        />
    );
};

export default PasswordInput;