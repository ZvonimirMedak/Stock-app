import React from 'react';
import firebase from 'firebase'
import { useForm } from 'react-hook-form';
import { LoginInterface } from '../consts/interfaces';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
import { useHistory } from 'react-router';
import { replaceLoginScreen } from '../helpers/navigation';
import { useSelector } from 'react-redux';
import { State } from '../reducers';

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
    const history = useHistory();
    const user = useSelector((state: State) => state.auth.user);
    const [isMounted, setIsMounted] = React.useState<boolean>(false);
    passwordRef.current = watch(loginFields.password, '');

    React.useEffect(() => {
        if (user?.uid) {
            replaceLoginScreen(history);
        } else {
            setIsMounted(true);
        }
    }, [user])

    const login = React.useCallback(async (data: LoginInterface) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((res) => {
                replaceLoginScreen(history);
            })
        } catch (error) {
            console.log(error)
        }
    }, [history])

    const register = React.useCallback(async (data: LoginInterface) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => {
                replaceLoginScreen(history)
            })
        } catch (error) {
            console.log(error);
        }
    }, [history])

    const changeStep = React.useCallback(() => {
        clearErrors();
        setStep((prev) => prev === Steps.LOGIN ? Steps.REGISTER : Steps.LOGIN);
    }, [clearErrors])

    const submitForm = React.useCallback(async (data: LoginInterface) => {
        if (step === Steps.LOGIN) {
            await login(data);
        }
        else {
            await register(data);
        }
    }, [step, register, login])

    if (isMounted) {
        return (
            <LoginRegisterScreen
                control={control}
                errors={errors}
                step={step}
                passwordRef={passwordRef}
                changeStep={changeStep}
                handleSubmit={handleSubmit(submitForm)}
            />
        )
    } return null;

}


export default LoginRegisterContaienr;