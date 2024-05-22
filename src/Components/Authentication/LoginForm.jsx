import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useSelector } from 'react-redux';

function LoginForm() {

    const count = useSelector((state) => state.authentication.user);

    const initialValue={
        email:'',
        password:'',
        isRemember:false
    }

    const validationSchema=Yup.object({
        email:Yup.string().email().required(),
        password:Yup.string().required()
    });

    const onSubmit=(values)=>{
        console.log(values);
    }
    
    return (
    <>
    <div>{count.name}</div>
        <div className="container bg-body-tertiary py-2 px-4" style={{ width: '400px' }}>
            <h1 className='text-center my-5'>Login Form</h1>
            <Formik 
                initialValues={initialValue} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                >
                {({ errors, touched }) => (
                <Form>
                <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email Address</label>
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

                    <div className="form-check mb-3">
                        <Field 
                        type="checkbox" 
                        name="rememberMe" 
                        id="rememberMe" 
                        className="form-check-input" 
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                        </label>

                        <Link className="float-end link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to='/forget-password'>
                            Forget Password?
                        </Link>
                    </div>

                    <div className="d-grid my-5">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="d-grid my-2 justify-content-center">
                        <p>Don't have an account? <Link className=' ms-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' to='/signup'>Sign up </Link> </p>
                    </div>
                    
                </Form>
                )}
            </Formik>
            </div>
    /</>
    );
}

export default LoginForm;