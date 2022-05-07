import { UserTask } from "../../../../api/UserTaskApi"
import { styled } from "../../../../styles/theme";
import UserTaskElement from "./UserTaskElement"

const UserTaskListStyled = styled.div`
    & > * {
        margin-bottom: 45px;
        :last-child{
            margin-bottom: 0;
        }
    }  
`

interface UserTaskListProps {
    tasks: UserTask[]
}

const UserTaskList: React.FC<UserTaskListProps> = ({ tasks }) => {
    return (
        <UserTaskListStyled>
            {tasks.map(t =>
                <UserTaskElement key={t.id} task={t} />
            )}
        </UserTaskListStyled>
    )
}

export default UserTaskList