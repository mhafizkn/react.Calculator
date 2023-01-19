import "./Button.css";
import "../fonts/Kanit-MediumItalic.ttf";

const Button = ({ className, value, onClick }) => {
    return(
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;