import { Field } from "react-final-form";
import { styled } from "../../../styles/theme";
import composeValidators from "../../../validators";

const InputFieldStyled = styled.div`

    .wrapper {
        display: flex;
    }
    input {
        flex: 70%;
        font-size: 16px;
        width: 100%;
        padding: 10px 15px;
        color: inherit;
        background-color: inherit;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        resize: none;
        background-color: white;
        color: black;
        border-radius: 3px;
        :focus{
            outline: 7px solid ${p => p.theme.colors.btnSubmit};
        }
        &.error{
            :focus{
                outline: 1px solid red;
            }
        }
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
`

export interface InputFieldProps {
    title: string
    name: string
    placeholder: string
    validators: any
}

const InputField: React.FC<InputFieldProps> = ({ title, name, placeholder, validators }) =>
    <Field
        title={title}
        name={name}
        placeholder={placeholder}
        validate={composeValidators(...validators)}
    >
        {({ input, meta }) => (
            <InputFieldStyled>
                {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
                <div className="wrapper">
                    <div className="title">{title}</div>
                    <input
                        className={meta.error && 'error'}
                        {...input} />
                </div>
            </InputFieldStyled>
        )}
    </Field>

export default InputField