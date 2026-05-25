"use client";

import * as React from "react";
import { useFormContext, useFormState } from "react-hook-form";

type FormFieldContextValue = {
    name: string;
    };

    export const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
    );

type FormItemContextValue = {
    id: string;
    };

    export const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
    );

    export const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);

    const { getFieldState } = useFormContext();
    const formState = useFormState({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error("useFormField deve ser usado dentro de <FormField>");
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-description`,
        formMessageId: `${id}-message`,
        ...fieldState,
    };
};