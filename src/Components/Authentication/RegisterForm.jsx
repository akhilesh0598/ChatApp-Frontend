import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function RegisterForm() {

    const initialValue={
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
        isRemember:false
    }

    const validationSchema=Yup.object({
        fullName:Yup.string().required(),
        email:Yup.string().email().required(),
        password:Yup.string().min(8, 'Password must be at least 8 characters').required(),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    });

    const onSubmit=(values)=>{
        console.log(values);
    }
    return (
    <>
        <div class="container bg-body-tertiary py-1 px-4" style={{ width: '400px' }}>
            <h1 className='text-center my-5'>Registration Form</h1>
            <Formik 
                initialValues={initialValue} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                >
                {({ errors, touched }) => (
                <Form>
                <div className='mb-3'>
                        <label htmlFor='fullName' className='form-label'>Full Name</label>
                        <Field
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        className={`form-control ${errors.email && touched.email ?'is-invalid':''}`}
                        />
                        <ErrorMessage name="fullName" component={"div"} className='invalid-feedback' />
                        
                </div>
                <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <Field
                        type='email'
                        name='email'
                        placeholder='Email'
                        className={`form-control ${errors.email && touched.email ?'is-invalid':''}`}
                        />
                        <ErrorMessage name="email" component={"div"} className='invalid-feedback' />
                        
                </div>

                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <Field
                        type='password'
                        name='password'
                        placeholder='Password'
                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                        <Field
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                    </div>

                    <div className="d-grid my-5">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="d-grid my-2 justify-content-center">
                        <p>Already have an account? <Link className=' ms-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' to='/login'>Login </Link> </p>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </div>
    /</>
    );
}

export default RegisterForm;