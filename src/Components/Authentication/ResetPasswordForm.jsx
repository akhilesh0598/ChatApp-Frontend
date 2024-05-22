import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function ResetPasswordForm() {

    const initialValues={
        newPassword:'',
        confirmNewPassword:'',
    }

    const validationSchema=Yup.object({
        newPassword:Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
        confirmNewPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match with New Password').required('Confirm Password is required')
    });

    const onSubmit=(values)=>{
        console.log(values);
    }
    
    return (
    <>
        <div class="container bg-body-tertiary py-2 px-4" style={{ width: '400px' }}>
            <h1 className='text-center my-5'>Reset Password Form</h1>
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                >
                {({ errors, touched }) => (
                <Form>
                <div className='mb-3'>
                        <label htmlFor='newPassword' className='form-label'>New Password</label>
                        <Field
                        type='password'
                        name='newPassword'
                        placeholder='New Password'
                        className={`form-control ${errors.newPassword && touched.newPassword ?'is-invalid':''}`}
                        />
                        <ErrorMessage name="newPassword" component={"div"} className='invalid-feedback' />
                        
                </div>

                <div className='mb-3'>
                        <label htmlFor='confirmNewPassword' className='form-label'> Confirm New Password</label>
                        <Field
                        type='password'
                        name='confirmNewPassword'
                        placeholder='Confirm New Password'
                        className={`form-control ${errors.confirmNewPassword && touched.confirmNewPassword ?'is-invalid':''}`}
                        />
                        <ErrorMessage name="confirmNewPassword" component={"div"} className='invalid-feedback' />
                        
                </div>
                    <div className="d-grid my-5">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div className="d-grid my-2 justify-content-center">
                        <p>Back To <Link className=' ms-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' to='/login'>Login </Link> </p>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    /</>
    );
}

export default ResetPasswordForm;