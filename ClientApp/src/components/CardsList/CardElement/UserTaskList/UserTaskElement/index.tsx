import { UserTask } from "../../../../../api/UserTaskApi";
import CardsThunks from "../../../../../redux/cards/CardsThunks";
import { useAppDispatch } from "../../../../../redux/hooks";
import { styled } from "../../../../../styles/theme";
import CheckBox from "../../../../UI/CheckBox";
import TaskText from "./TaskText";

const UserTaskElementStyled = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    input[type="checkbox"] {
        margin: 0 40px;
        display: flex;
        align-items: center;
    }
    
`

interface UserTaskElementProps {
    task: UserTask
}

const UserTaskElement: React.FC<UserTaskElementProps> = ({ task }) => {
    const dispatch = useAppDispatch()
    return (
        <UserTaskElementStyled>
            <div>
                <CheckBox
                    handler={() => { dispatch(CardsThunks.changeTaskCompleted({ id: task.id, completed: !task.completed })) }}
                    checked={task.completed}
                />
            </div>
            <TaskText
                id={task.id}
                onChange={(id: number, text: string) => { dispatch(CardsThunks.changeTaskText({ id: id, text: text })) }}
                text={task.text}
            />
        </UserTaskElementStyled>
    )
}

export default UserTaskElement;