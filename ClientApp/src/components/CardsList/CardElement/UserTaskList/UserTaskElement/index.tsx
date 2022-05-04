import { UserTask } from "../../../../../api/UserTaskApi";
import CheckBox from "../../../../UI/CheckBox";

interface UserTaskElementProps {
    task: UserTask
}

const UserTaskElement: React.FC<UserTaskElementProps> = ({ task }) => {
    return (
        <div>
            <CheckBox handler={(a: boolean) => { }} checked={task.completed} />
            {task.text}
        </div>
    )
}

export default UserTaskElement;