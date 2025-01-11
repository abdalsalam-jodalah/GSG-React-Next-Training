import { ITask } from "../../types.ts";
import "./dashboard.css";

interface IProps {
    tasksArray: ITask[];
}
const Dashboard = (props: IProps) => {
    const totalTasks = props.tasksArray.length;
    const urgentTasks = props.tasksArray.filter((task) => task.isUrgent).length;

    return (
        <div className="dashboard">
            <div>
                <b>{totalTasks}</b>
                <span>Total Tasks</span>
            </div>
            <div>
                <b>{urgentTasks}</b>
                <span>Urgent Tasks</span>
            </div>
        </div>
    );
};

export default Dashboard;
