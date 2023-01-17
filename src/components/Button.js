import "./Button.css";

const Button = ({ classname, value, onClick }) => {
    return(
        <button classname={classname} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;