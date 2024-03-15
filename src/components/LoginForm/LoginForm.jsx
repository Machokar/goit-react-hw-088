import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationAuth';
import css from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const email_Id = useId();
  const pass_Id = useId();
  const loginSchema = Yup.object().shape({
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
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(logIn(values));
          action.resetForm();
        }}
        validationSchema={loginSchema}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.formGroup}>
            <label htmlFor={email_Id} className={css.label}>
              Email
            </label>
            <Field type="email" name="email" id={email_Id} autoComplete="username"></Field>
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={pass_Id} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id={pass_Id}
              autoComplete="current-password"
            ></Field>
            <ErrorMessage name="password" component="span" className={css.error} />
          </div>
          <button className={css.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
