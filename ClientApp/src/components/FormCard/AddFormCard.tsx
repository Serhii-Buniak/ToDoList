import { useEffect } from "react"
import FormCard from "."
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getValues } from "../../redux/taskForm/taskFormSelectors"
import { taskFormActions } from "../../redux/taskForm/taskFormReducer"
import TaskFormThunks from "../../redux/taskForm/taskFormThunks"

interface AddFormCarProps {

}

const AddFormCard: React.FC<AddFormCarProps> = () => {
    const dispatch = useAppDispatch()
    const values = useAppSelector(getValues)

    useEffect(() => {
        dispatch(taskFormActions.init({
            title: null,
            tasks: [{
                text: null,
                completed: false
            }, {
                text: null,
                completed: false
            }, {
                text: null,
                completed: false
            }]
        }))
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
                dispatch(TaskFormThunks.add(values))
            }}
        />
    )
}

export default AddFormCard