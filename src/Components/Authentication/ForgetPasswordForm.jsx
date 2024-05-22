import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const ForgetPasswordForm = () => {


    const initialValues={
        email:'',
    }

    const validationSchema=Yup.object({
        email:Yup.string().email().required(),
    });

    const onSubmit=(values)=>{
        console.log(values);
    }

    return (
        <div class="container bg-body-tertiary py-2 px-4" style={{ width: '400px' }}>
            <h1 className='text-center my-5'>Forget Password</h1>
            <Formik
                initialValues={initialValues}
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

                    <div className="d-grid my-5">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>

                    <div className="d-grid my-2 justify-content-center">
                        <p>Back To? <Link className=' ms-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' to='/login'>Login </Link> </p>
                    </div>
                    
                </Form>
                )}
                
            </Formik>            
        </div>
    );
};

export default ForgetPasswordForm;