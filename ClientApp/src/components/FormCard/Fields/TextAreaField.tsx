import { Field } from "react-final-form";
import { styled } from "../../../styles/theme";
import composeValidators from "../../../validators";
import TextAreaStyled from "../../CardsList/CardElement/UserTaskList/UserTaskElement/TextAreaStyled";
import { InputFieldProps } from "./InputField";
import deleteBtn from 'images/delete-btn.svg'

const TextAreaFieldStyled = styled.div`
    position: relative;
    .wrapper {
        display: flex;
    }
    .title {
        flex: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 21px;
    }
    & > .error{
        font-size: 18px;
        margin-bottom: 10px;
    }
    img {
        position: absolute;
        z-index: 1;
        width: 50px;
        height: 50px;
        top: -25px;
        right: -25px;
        cursor: pointer;
    }
`

interface TextAreaFieldProps extends InputFieldProps {
    onDelete: () => void
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ title, name, placeholder, validators, onDelete }) => {
    return (
        <Field
            title={title}
            name={name}
            placeholder={placeholder}
            validate={composeValidators(...validators)}
        >
            {({ input, meta }) => (
                <TextAreaFieldStyled>
                    {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
                    <div className="wrapper">
                        <div className="title">{title}</div>
                        <TextAreaStyled
                            className={meta.error && 'error'}
                            {...input} />
                    </div>
                    <img onClick={onDelete} src={deleteBtn} alt="deleteBtn" />
                </TextAreaFieldStyled>
            )}
        </Field>
    )
}

export default TextAreaField;