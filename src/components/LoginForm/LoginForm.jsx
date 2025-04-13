import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('OK! You are logged');
      })
      .catch(() => {
        toast.error('Error, mistake!');
      });
    actions.resetForm();
  };

  return (
    <div className={css.box}>
      <h2 className={css.header}>Login</h2>
      <p className={css.text}>login here using your email and password</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </label>
          <label className={css.label}>
            <Field
              className={css.field}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
