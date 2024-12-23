import './calc-area.css'
interface IProps{
    expression: string[];
}
const CalcArea =(props:IProps) => {
    return (
        <div className="CalcArea">
            {props.expression.join('')}
        </div>
    )
}
export default CalcArea