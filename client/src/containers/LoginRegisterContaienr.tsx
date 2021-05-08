import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginInterface } from '../consts/interfaces';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';

export const loginFields = {
    email: "email",
    password: "password",
    repeatPassword: "repeatPassword",
}

export enum Steps {
    LOGIN,
    REGISTER
}

const LoginRegisterContaienr = () => {
    const { control, handleSubmit, formState: { errors }, watch, clearErrors } = useForm();
    const [step, setStep] = React.useState(Steps.LOGIN);
    const passwordRef = React.useRef({});
    passwordRef.current = watch(loginFields.password, '');

    const login = React.useCallback((data: LoginInterface) => {
        console.log(data)
    }, [])

    const changeStep = React.useCallback(() => {
        clearErrors();
        setStep((prev) => prev === Steps.LOGIN ? Steps.REGISTER : Steps.LOGIN);
    }, [clearErrors])

    return (
        <LoginRegisterScreen
            control={control}
            errors={errors}
            step={step}
            passwordRef={passwordRef}
            changeStep={changeStep}
            handleSubmit={handleSubmit(login)}
        />
    )
}


export default LoginRegisterContaienr;