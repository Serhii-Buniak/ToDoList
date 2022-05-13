import { UserTask } from "../../../../api/UserTaskApi"
import { styled } from "../../../../styles/theme";
import UserTaskElement from "./UserTaskElement"

interface UserTaskListProps {
    tasks: UserTask[]
}

const UserTaskList: React.FC<UserTaskListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.map(t =>
                <UserTaskElement key={t.id} task={t} />
            )}
        </div>
    )
}

export default UserTaskList