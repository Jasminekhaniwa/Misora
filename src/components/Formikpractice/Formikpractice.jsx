import React from 'react'
import { useFormik } from 'formik'




const Formikpractice = () => {

// const validate=values=>{
//     const errors= {};
//     if(!values.email){
//         errors.email="email required";
//     }
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.text(values.email)){
//         errors.email="invalid email"
//     };

// if(!values.contact){
//     errors.contact="contact required";
// }
// else if(!/^\+?[0-9]{10,14}$/.test(values.contact)){
//     errors.contact="incalid contact"

// };
// if(!values.name){
//     errors.name="name required"
// }
// else if(values.name.length>15){
//     errors.name="name should not be longer than 15 character "
// };

//     return errors;

// }



// const formik=useFormik({
//     initialValues:{
//           name:"",
//           contact:"",
//           email:""

//     },
// validate,
// onSubmit:values=>{
// alert(JSON.stringify(values,null,2));
// }

// })

  return (
    <formik 
    initialValues={{
        name:"name",
        contact:"contact",
        email:"email"
    }}
    validationSchema={Yup.object({
        name:Yup.string()
        .required("name must be filled")
        .max(15,"name must be less than 15 character"),

        contact:Yup.string()
        .required("name must be filled")
        .max(15,"name must be less than 15 character")

        
    })

    }
    >
    <div className='background'>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                <lable>enter name</lable>
                <input
                 type='text'
                 name="name"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.name}
                 
                  />
                  {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>):null }
                  </div>

                  <div>
                <lable>enter contact</lable>
                <input
                 type='number'
                 name="contact"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.contact}
                 
                  />
                  {formik.errors.contact && formik.touched.contact? (<div>{formik.errors.contact} </div> ):null }
                  </div>

                  <div>
                <lable>enter email</lable>
                <input
                 type='email'
                 name="email"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.email}
                 
                  />
                  {formik.errors.email && formik.touched.email? (<div>{formik.errors.email}</div>):null }
                  </div>

                  <div>
                    <button type='submit'> submit</button>
                  </div>
            </form>

        </div>     
    </div>
    </formik>
  )
}

export default Formikpractice
