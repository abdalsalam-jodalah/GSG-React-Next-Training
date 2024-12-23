import {IButton} from "../../types.ts";
import './button.css'
interface IProps extends IButton{
    onClick :(value:string,operation:boolean) =>void;
}

const Button =(props:IProps) => {
    const handleClick =() => {
        props.onClick(props.value, props.operation )
    }
    return (
        <div
            className={props.operation?"operation":"number"}
            onClick={handleClick}
        >
            {props.value}
        </div>
    )
}
export default Button