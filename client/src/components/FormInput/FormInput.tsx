import { type Control, Controller, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../Input";
import { InputLabel } from "../InputLabel";
import type { IconName } from "../../assets";
import styles from "./FormInput.module.css";
import { useState } from "react";

interface FormInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    placeholder: string;
    control: Control<T>;
    type?: string;
    leftIcon?: IconName;
    rightIcon?: IconName;
    disabled?: boolean;
    showPasswordToggle?: boolean;
}

export const FormInput = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    type = "text",
    disabled = false,
    showPasswordToggle = false
}: FormInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className={label ? styles['label-wrapper'] : ''}>
                    {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
                    <Input
                        id={name}
                        type={showPasswordToggle ? (showPassword ? "text" : "password") : type}                        placeholder={placeholder}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={!!error}
                        helperText={error?.message}
                        disabled={disabled}
                        rightIcon={
                            showPasswordToggle
                                ? (showPassword ? "hidePass" : "showPass")
                                : undefined
                        }
                        onRightIconClick={
                            showPasswordToggle
                                ? () => setShowPassword((prev) => !prev)
                                : undefined
                        }
                    />
                </div>
            )}
        />
    );
};
