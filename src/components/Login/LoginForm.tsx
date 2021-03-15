import React from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validator/validators";
import rc from "../common/FormsControls/FormsControls.module.scss"

type FormDataT = {
    login: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm = (props: InjectedFormProps<FormDataT>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"Login"} name={"login"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} validate={[requiredField]}/> remember me
            </div>
            {props.error && <span className={rc.formSummaryError}>
                {props.error}
            </span>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default reduxForm<FormDataT>({
    form: "login"
})(LoginForm);
