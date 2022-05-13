import { useRef, useState } from "react";
import { Field, Form } from "react-final-form";
import { UserTask } from "../../../../../api/UserTaskApi";
import CardsThunks from "../../../../../redux/cards/CardsThunks";
import { useAppDispatch } from "../../../../../redux/hooks";
import { styled } from "../../../../../styles/theme";
import composeValidators, { maxLength200, required } from "../../../../../validators";
import CheckBox from "../../../../UI/CheckBox";
import TextAreaStyled from "./TextAreaStyled";

const UserTaskElementStyled = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    border-top: 2px solid ${p => p.theme.colors.btnSubmit};
    padding: 20px 5px;
 
    input[type="checkbox"] {
        margin: 0 40px;
        display: flex;
        align-items: center;
    }
    form {
        width: 100%;
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
            <Form
                onSubmit={() => { }}
                initialValues={{
                    text: task.text
                }}
                render={({ values }) => (
                    <form>
                        <Field
                            title="text"
                            name="text"
                            placeholder="Task..."
                            validate={composeValidators(...[required, maxLength200])}
                        >
                        {({ input, meta }) => (
                            <div>
                                {meta.error && <span className='error'>{meta.error}</span>}
                                <TextAreaStyled
                                    className={meta.error && 'error'}
                                    {...input}
                                    rows={3}
                                    onBlur={() => {
                                        if (meta.valid) {
                                            dispatch(CardsThunks.changeTaskText({ id: task.id, text: values.text }))
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </Field>
                    </form>
    )
}
/>




{/* <TaskText
                    id={task.id}
                    onChange={(id: number, text: string) => { dispatch(CardsThunks.changeTaskText({ id: id, text: text })) }}
                    text={task.text}
                />  */}


        </UserTaskElementStyled >
    )
}

export default UserTaskElement;