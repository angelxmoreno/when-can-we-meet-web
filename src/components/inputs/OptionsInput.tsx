import React from 'react';
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface RadioInputProps<Fields extends FieldValues> {
    control: Control<Fields>;
    name: Path<Fields>;
    type?: 'checkbox' | 'radio';
    label: string;
    options: Record<string | number, string>;
}
export default function OptionsInput<Fields extends FieldValues>({
    control,
    name,
    label,
    options,
    type = 'radio',
}: RadioInputProps<Fields>) {
    const {
        field: { onChange, onBlur, ref },
        fieldState: { error, invalid, isDirty },
    } = useController({
        name,
        control,
    });
    return (
        <div className="mb-3">
            <FormLabel className="d-block">{label}</FormLabel>
            {Object.entries(options).map(([k, v]) => (
                <Form.Check
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    value={k}
                    isInvalid={!!error?.message}
                    isValid={isDirty && !invalid}
                    key={`${name}-${k}`}
                    className="mb-3"
                    inline
                    label={v}
                    name={name}
                    type={type}
                    id={`${name}-${k}`}
                />
            ))}
            <span className="text-danger d-block">{error?.message}</span>
        </div>
    );
}
