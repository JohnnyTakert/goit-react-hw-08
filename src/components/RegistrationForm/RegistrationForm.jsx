import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // console.log('Registration values');
    // console.log(values);
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Good! User created!');
      })
      .catch(() => {
        toast.error('Error, mistake!');
      });
    actions.resetForm();
  };

  return (
    <div className={css.box}>
      <h2 className={css.header}>Register</h2>
      <p className={css.text}>Create a new account here</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
