import { useEffect } from "react"
import FormCard from "."
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getValues } from "../../redux/taskForm/taskFormSelectors"
import { taskFormActions } from "../../redux/taskForm/taskFormReducer"
import TaskFormThunks from "../../redux/taskForm/taskFormThunks"
import { useNavigate, useParams } from "react-router-dom"


const EditFormCard: React.FC = () => {
    const dispatch = useAppDispatch()
    const values = useAppSelector(getValues)
    const { id } = useParams<string>()
    console.log(id);
    useEffect(() => {
        dispatch(TaskFormThunks.init(Number(id)))
    }, [])

    return (
        <FormCard
            initialValues={values!}
            onAdd={(values) => {
                dispatch(taskFormActions.init(values))
                dispatch(taskFormActions.add())
            }}
            onDelete={(index, values) => {
                dispatch(taskFormActions.init(values))
                dispatch(taskFormActions.delete(index))
            }}
            onSubmit={(values) => {
                dispatch(TaskFormThunks.update(values))
            }}
        />
    )
}

export default EditFormCard