import { UserTask } from "../../../../api/UserTaskApi"
import UserTaskElement from "./UserTaskElement"

interface UserTaskListProps {
    tasks: UserTask[]
}

const UserTaskList: React.FC<UserTaskListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.map(t =>
                <UserTaskElement task={t} />
            )}
        </div>
    )
}

export default UserTaskList