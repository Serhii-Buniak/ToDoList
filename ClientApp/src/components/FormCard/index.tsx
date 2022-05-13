import { useState } from "react"
import { Field, Form } from "react-final-form"
import { styled } from "../../styles/theme"
import { TextAreaStyled } from "../CardsList/CardElement/UserTaskList/UserTaskElement/TextAreaStyled"

import addBtn from "images/add-btn.svg"
import { Card } from "../../api/CardApi"
import { InitialValueType } from "../../redux/taskForm/taskFormReducer"
import LinkStyled from "../UI/LinkStyled"
import { NavLink } from "react-router-dom"
import composeValidators, { maxLength200, maxLength30, required } from "../../validators"
import InputField from "./Fields/InputField"
import TextAreaField from "./Fields/TextAreaField"

const FormStyled = styled.form`
    margin: 0 auto;
    text-align: center;
    width: 768px;
    & > * {
        margin-bottom: 30px;
    }
    section {
        display: flex;
        justify-content: center;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    .add { 
        cursor: pointer;
        display: block;
        height: 70px;
        width: 70px;
    }
`

interface FormCardProps {
    initialValues: InitialValueType
    onAdd: (values: InitialValueType) => void
    onDelete: (index: number, values: InitialValueType) => void
    onSubmit: (e: InitialValueType) => void
}

const FormCard: React.FC<FormCardProps> = ({ initialValues, onAdd, onDelete, onSubmit }) => {

    return (
        <Form onSubmit={(e: InitialValueType) => {
            onSubmit(e)
        }} initialValues={initialValues}
            render={({ handleSubmit, submitting, values }) => (
                <FormStyled onSubmit={handleSubmit}>


                    <InputField
                        title="Title"
                        name="title"
                        placeholder="Title..."
                        validators={[required, maxLength30]}
                    />


                    {initialValues.tasks.map((t, i) =>
                        <TextAreaField key={i}
                            title={`Task ${i + 1}`}
                            name={`tasks[${i}].text`}
                            placeholder="Task..."
                            onDelete={() => onDelete(i, values)}
                            validators={[required, maxLength200]}
                        />
                    )}

                    <div>
                        <img className="add" src={addBtn} alt="addBtn" onClick={() => onAdd(values)} />
                    </div>
                    <div className="buttons">
                        <LinkStyled as={NavLink} to='/' btnstyle='cancel'>
                            Cancel
                        </LinkStyled>
                        <LinkStyled btnstyle='submit' as='button' disabled={submitting}>
                            Submit
                        </LinkStyled>
                    </div>
                </FormStyled>
            )}
        />
    )
}


export default FormCard