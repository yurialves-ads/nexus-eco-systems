"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";

import { cn } from "./utils";
import { Label } from "./label";

import {
  FormFieldContext,
  FormItemContext,
  useFormField,
} from "./form-context";

const Form = FormProvider;

function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel(
  props: React.ComponentProps<typeof LabelPrimitive.Root>
) {
  const { formItemId } = useFormField();

  return <Label htmlFor={formItemId} {...props} />;
}

function FormControl(props: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : formDescriptionId
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription(
  props: React.ComponentProps<"p">
) {
  const { formDescriptionId } = useFormField();

  return <p id={formDescriptionId} {...props} />;
}

function FormMessage(
  props: React.ComponentProps<"p">
) {
  const { error, formMessageId } = useFormField();

  if (!error) return null;

  return (
    <p id={formMessageId} {...props}>
      {String(error.message)}
    </p>
  );
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};