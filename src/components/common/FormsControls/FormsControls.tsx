import React from "react";
import { WrappedFieldProps } from "redux-form";
import s from "./FormsControls.module.scss";

const FormControl: React.FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    const isError = touched && error;

    return (
        <div className={`${s.formControl}  ${isError && s.error}`}>
            {children}
            <div>{isError && <span>{error}</span>}</div>
        </div>
    );
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};;
