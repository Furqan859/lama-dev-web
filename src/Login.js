import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const Login = () => {
    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',
        },

        validationSchema : Yup.object({
            eamil  : Yup.string()
            .email('Invalid Email Address')
            .required('required'),
            password : Yup.string()
            .required('invalid password')
            .min(8, "password must have at least 8 characters"),
            
            
        }),

        onSubmit : values => {
            alert(JSON.stringify(values,null,2))
        },
    });

    return (
        <div><form >

        <label>email</label>
            <input type="emial" name="email" placeholder="email" id='email' label="email"
                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email  && formik.errors.email ? ( <div> {formik.touched.email} </div>) : null}

            <label>Password</label>
            <input type="password" name="password" placeholder="password" id='password' label="password"
               onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}

                />
                {formik.touched.password && formik.errors.password ? (<div>{formik.touched.password}</div> ): null}


            <button type="submit" onSubmit={formik.handleSubmit}>Login</button>

        </form></div>
    )
}

export default Login;