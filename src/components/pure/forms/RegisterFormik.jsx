import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// MODELS
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';


const RegisterFormik = () => {

  let user = new User();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }

  const registerSchema = Yup.object().shape(
    {
      username:  Yup.string()
                    .min(6, 'Username must have almost 6 characters')
                    .max(16, 'Username must have maximum 16 characters')
                    .required('Username is required'),
      
      email:     Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
      
      password:  Yup.string()
                    .min(8, 'Password must have almost 8 characters')
                    .required('Password is required'),
      confirm:   Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match!')
                    .required('You must confirm the password') 
      }
    )
  
  const submit = () => {
    alert('register user')
  }

  return (
    <div>
        <h4>Register Form</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
          }}
        >
        {({ values, errors, touched, isSubmitting, handleBlur, handleChange }) => (
          <Form>
              <label htmlFor='username'>Username</label>
              <Field id='username' type='text' name='username' placeholder='Username'></Field>
               {/* Username error */}
               {
                errors.username && touched.username && (
                  <ErrorMessage name='username' component='div'></ErrorMessage>
                )
              }

              <label htmlFor='email'>Email</label>
              <Field id='email' type='email' name='email' placeholder='example@email.com'></Field>
              {/* Email error */}
              {
                errors.email && touched.email && (
                  <ErrorMessage name='email' component='div'></ErrorMessage>
                )
              }

              <label htmlFor='password'>Password</label>
              <Field id='password' type='password' name='password' placeholder='********'></Field>
               {/* Password error */}
               {
                errors.password && touched.password && (
                  <ErrorMessage name='password' component='div'></ErrorMessage>
                )
              }
              
              <label htmlFor='confirm'>Confirm password</label>
              <Field id='confirm' type='password' name='confirm' placeholder='********'></Field>
               {/* Confirm password error */}
               {
                errors.confirm && touched.confirm && (
                  <ErrorMessage name='confirm' component='div'></ErrorMessage>
                )
              }

              <button type='submit'>Register account</button>
              {isSubmitting ? (<p>Sending your credentials...</p>) : null}

          </Form>
        )}
        </Formik>
    </div>
  );
}

export default RegisterFormik;
