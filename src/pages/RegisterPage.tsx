import MetaHeader from '@app/components/MetaHeader';
import TextInput from '@app/components/inputs/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

type FormFields = yup.InferType<typeof validationSchema>;
const defaultValues: FormFields = {
    email: 'bob@jones.com',
    password: 'bob@jones.com',
};

const RegisterPage: FC = () => {
    // const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormFields> = async ({ email, password }) => {
        // const { user, error } = await firebaseAuth.emailRegister({
        //     email,
        //     password,
        // });
        // if (error) {
        //     setError('email', {
        //         message: error,
        //     });
        // }
        // if (user) {
        //     alert(`Hello ${user.email}`);
        //     updateAuthStore(user);
        //     navigate('/dashboard');
        // }
    };
    const {
        control,
        handleSubmit,
        // setError,
        formState: { isSubmitting },
    } = useForm<FormFields>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            ...defaultValues,
        },
    });

    return (
        <div>
            <MetaHeader title="The Register Page" />
            <h1>Register</h1>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    control={control}
                    name="email"
                    label="Email Address"
                    type="email"
                />
                <TextInput
                    control={control}
                    name="password"
                    label="Password"
                    type="password"
                />

                <Button type="submit" disabled={isSubmitting}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;
