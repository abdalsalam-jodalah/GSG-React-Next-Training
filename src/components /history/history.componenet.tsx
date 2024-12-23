import './history.css'
interface IProps{
     history:string[]
}
const History =(props:IProps) => {
    return (
        <div className="history">
            {props.history.map(history=> <div>{history}</div>)}
        </div>
    )
}
export default History