import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function LoginForm() {

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
        <div className='mb-3'>
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

                        <a className="float-end link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                            Forget Password?
                        </a>
                    </div>

                    <div className="d-grid my-5">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="d-grid my-2 justify-content-center">
                        <p>Don't have an account? <a className=' ms-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='#'>Sign up </a> </p>
                    </div>
                    
                </Form>
                )}
            </Formik>
        </div>
    /</>
    );
}

export default LoginForm;