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

    export function useFormField() {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);

    if (!fieldContext || !itemContext) {
        throw new Error("useFormField deve ser usado dentro do contexto do Form");
    }

    const { getFieldState } = useFormContext();
    const formState = useFormState({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);

    return {
        id: itemContext.id,
        name: fieldContext.name,
        formItemId: `${itemContext.id}-form-item`,
        formDescriptionId: `${itemContext.id}-description`,
        formMessageId: `${itemContext.id}-message`,
        ...fieldState,
    };
}