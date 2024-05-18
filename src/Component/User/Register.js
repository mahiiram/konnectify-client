import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { registerUser } from '../../helper/helper.js';
import { registerValidation } from '../../helper/Validate.js';


function UserRegister() {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values)
             const registerPromise = registerUser(values);
             toast.promise(registerPromise,{
              loading:'creating....',
              success: <b>user register successfully</b>,
              error: <b>Couldnt Register</b>
             })
            console.log(values);
            localStorage.setItem('email', values.email)
            registerPromise.then(function () {navigate('/userprofile') })
        }

    })


    return (

        <div className='Home'>
            <Toaster position='top-right' reverseOrder={false} />
            <div className='Maindiv'>
                <div className='text'>
                    <h1>SignUp</h1>
                    <p>User SignUp</p>
                </div>
                <div className='form-div'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label" >Email</label>
                            <input {...formik.getFieldProps('email')} placeholder='Enter Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label for="exampleInputEmail1" className="form-label" >Name</label>
                            <input {...formik.getFieldProps('username')} placeholder='Enter Username' type="text" className="form-control" />
                            <label for="exampleInputEmail1" className="form-label" >Password</label>
                            <input {...formik.getFieldProps('password')} placeholder='Enter Password' type="password" className="form-control" />
                            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
    
                        </div>
                        <div className='button-div'>
                            <button type="submit" className="btn btn-primary" >SignUp</button>
                        </div>
                        <div className='button-div'><p>Already registered? <span><Link to='/' >Login</Link></span></p>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRegister