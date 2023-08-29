import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginFormik = () => {
  const navigate = useNavigate(); // Use the useNavigate hook directly

  const saveCredentials = async (values) => {
    localStorage.setItem('credentials', JSON.stringify(values)); // Convert values to JSON
    navigate('/profile'); // Trigger the navigation after saving credentials
  };

  const initialCredentials = {
    email: '',
    password: '',
  };

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          await saveCredentials(values);
          setSubmitting(false);
          return <Navigate to="/profile" replace logged={true} />;
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor='email'>Your email</label>
            <Field id='email' name='email' placeholder='mail@example.com' type='email' />
            {errors.email && touched.email && <ErrorMessage component='div' name='email' className='error-email' />}

            <label htmlFor='password'>Password</label>
            <Field id='password' name='password' placeholder='Your password' type='password' />
            {errors.password && touched.password && (
              <ErrorMessage component='div' name='password' className='error-password' />
            )}

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
