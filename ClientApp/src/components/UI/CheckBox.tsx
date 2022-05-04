interface CheckBoxProps {
    handler: (checked: boolean) => void
    checked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({ handler, checked }) => {
    const handleChange = () => {
        handler(!checked)
    };

    return (
        <input type="checkbox"
            checked={checked}
            onChange={handleChange}
        />
    )
}

export default CheckBox