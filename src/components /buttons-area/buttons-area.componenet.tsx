import Button from "../button/button.componenet.tsx";
import {IButton} from "../../types.ts";
import './buttons-area.css'
interface IProps {
    updateExp: (value:string,operation:boolean) => void;
}
const ButtonsArea =(props: IProps) => {
    const Buttons:Array<IButton> =[
        {value:"1",operation:false},
        {value:"2",operation:false},
        {value:"3",operation:false},
        {value:"+",operation:true},
        {value:"4",operation:false},
        {value:"5",operation:false},
        {value:"6",operation:false},
        {value:"-",operation:true},
        {value:"7",operation:false},
        {value:"8",operation:false},
        {value:"9",operation:false},
        {value:"x",operation:true},
        {value:"0",operation:false},
        {value:"Del",operation:true},
        {value:"Clr",operation:true},
        {value:"/",operation:true},
        {value:"=",operation:true},
    ];

    return (
        <div className="ButtonsArea">
            {Buttons.map(button =>
                <Button
                    key={button.value}
                    value={button.value}
                    operation={button.operation}
                    onClick={props.updateExp}
                />
            )}
        </div>
    )
}
export default ButtonsArea