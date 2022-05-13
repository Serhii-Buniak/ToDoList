const composeValidators = (...validators: any) => (value: any) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined)

export const required = (value: any) => {
    return (value ? undefined : 'Required')
}

export const maxLength30 = (value: string) => {
    return (value.length < 30 ? undefined : 'Max length 30')
}

export const maxLength200 = (value: string) => {
    return (value.length < 200 ? undefined : 'Max length 200')
}

export default composeValidators