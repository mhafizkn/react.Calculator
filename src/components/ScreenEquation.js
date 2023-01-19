import {Textfit} from "react-textfit";
import "./ScreenEquation.css";

const ScreenEquation = ({ equation }) => {
return (
    <Textfit className="temporary" mode="single" max={40}>
        {equation}
    </Textfit>  
  );
};

export default ScreenEquation;  