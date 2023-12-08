import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

export interface TextInputProps<Fields extends FieldValues> {
    control: Control<Fields>;
    name: Path<Fields>;
    label: string;
    type?: string;
    placeholder?: string;
}

export default function TextInput<Fields extends FieldValues>({
    control,
    name,
    label,
    type,
    placeholder,
}: TextInputProps<Fields>) {
    const {
        field: { onBlur, onChange, value, ref },
        fieldState: { error, invalid, isDirty },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <FloatingLabel controlId={name} label={label} className="mb-3">
                <Form.Control
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    isInvalid={!!error?.message}
                    isValid={isDirty && !invalid}
                    ref={ref}
                    type={type}
                    as={type === 'textarea' ? 'textarea' : 'input'}
                    style={type === 'textarea' ? { height: '100px' } : {}}
                    placeholder={placeholder}
                />
                <Form.Control.Feedback type="invalid">
                    {error?.message}
                </Form.Control.Feedback>
            </FloatingLabel>
        </>
    );
}
