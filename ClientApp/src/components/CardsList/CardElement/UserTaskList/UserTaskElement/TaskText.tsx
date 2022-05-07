import { useRef, useState } from "react"
import reactTextareaAutosize from "react-textarea-autosize";
import { styled } from "../../../../../styles/theme";

const TaskTextStyled = styled(reactTextareaAutosize)`
    font-size: 16px;
    width: 100%;
    padding: 10px 15px;
    color: inherit;
    background-color: inherit;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    resize: none;
    :focus{
        outline: 3px solid ${p => p.theme.colors.btnSubmit};
        border-radius: 10px;
    }
    &.error{
        :focus{
            outline: 3px solid red;
            border-radius: 10px;
        }
    }
`

interface TaskTextProps {
    id: number
    text: string
    onChange: (id: number, text: string) => void
}

const TaskText: React.FC<TaskTextProps> = ({ id, text, onChange }) => {

    const [error, setError] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value

        if (text.length > 200 || text === "") {
            setError(true)
            return
        }

        setError(false)
        onChange(id, text)
    }

    return (
        <TaskTextStyled className={error ? "error" : ""} value={text} onChange={handleChange} />
    )
}

export default TaskText;