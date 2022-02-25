// import {  useFormik } from 'formik'
// import React from 'react'
// import Login from './Login'

// const validate = values => {
//   const errors = {};

//   if(!values.name) {
//     errors.name = "Required";
//   }else if(values.name.length > 15) {
//     errors.name = "Must be 15 characters or less";
//   }

//   if(!values.email) {
//     errors.email = "Required";
//   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     errors.email="Invalid email address"
//   }

//   if(!values.password) {
//     errors.password = "Required";
//   }else if(values.password.length < 8){
//     errors.password = "password must have at least 8 characters";
//   }
//     return errors;
// }


// const App = () => {
//   const formik = useFormik({
//     initialValues:{
//       name:'',
//       email:'',
//       password:''
//     },
//     validate,
//     onSubmit:(values)=>{
//       alert(JSON.stringify(values,null,2));
//     }
//   })
//   return (
//     <div>
//     <form onSubmit={formik.handleSubmit}>
    
//     <label Htmlfor="name">Name</label>
//     <input type="text" name="name" id="name" placeholder="name" onChange={formik.handleChange}
//     value={formik.values.name} onBlur={formik.handleBlur}
//     />
//     {formik.touched.name  && formik.errors.name ? <div>{formik.errors.name}</div> : null}


//     <label Htmlfor="email">Email</label>
//     <input type="eamil" name="email" id="email" placeholder="Email" onChange={formik.handleChange}
//     value={formik.values.email}
//     />
// {formik.errors.email ? <div>{formik.errors.email}</div> : null}


//     <label Htmlfor="password">Password</label>
//     <input type="password" name="password" id="password" placeholder="password" onChange={formik.handleChange}
//     value={formik.values.password}
//     />
//     {formik.errors.password ? <div>{formik.errors.password}</div> : null}

//     <button type="submit">Update</button>

//     </form> 
//     <div>------------------------------------------------------</div>
//     <Login/>
//     </div>
    
  
    
    
//   )
// }

// export default App



import React from 'react';
import Login from './Login'

const App = () => {
  return (
    <div><Login/></div>
  )
}

export default App