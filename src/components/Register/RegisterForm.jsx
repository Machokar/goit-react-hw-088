import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operationAuth';

export const Registerform = () => {
  const dispatch = useDispatch();

  const name_Id = useId();
  const email_Id = useId();
  const password_Id = useId();
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols')
      .max(20, 'Max length is 20')
      .required('Name is required')
      .matches('^[a-zA-Z]+$', 'Only alphabet symbols'),
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(register(values));
          action.resetForm();
        }}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={name_Id} className={css.label}>
              Name
            </label>
            <Field type="text" name="name" id={name_Id}></Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={email_Id} className={css.label}>
              Email
            </label>
            <Field type="email" name="email" id={email_Id}></Field>
            <ErrorMessage
              name="email"
              component="span"
              className={css.error}
              autoComplete="username"
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={password_Id} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id={password_Id}
              autoComplete="current-password"
            ></Field>
            <ErrorMessage name="password" component="span" className={css.error} />
          </div>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
