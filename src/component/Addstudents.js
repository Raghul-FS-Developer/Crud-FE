import axios from 'axios';
import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
function AddStudent() {

    let navigate = useNavigate();
    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [mobile,setMobile]=useState("");
    // let [degree,setDegree]=useState("");
    // let [dept, setDept]=useState("");   
    // let handleSave = async()=>{       
    //     await fetch('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             name,
    //             email,
    //             mobile,
    //             degree,
    //             dept
    //         })
    //     })
    //     .then(response =>response.json())
    //     .then(data=>console.log(data))
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    //     navigate('/all-students')
    // }
 const formik = useFormik({
     initialValues:{
         name:'',
         email:'',
         mobile:'',
         degree:'',
         dept:''
     },
     onSubmit(values) {
        // Do stuff here...
        handleSave(values)
      
    },validationSchema:yup.object({
         name:yup.string().required('required'),
         email:yup.string().email('invalid email address').required('required'),
         mobile:yup.string().matches(/^\d{10}$/,"invalid mobile number ").required('required'),
         degree:yup.string(),
         dept:yup.string()
     }),
     
     
 })
    let handleSave =async(data)=>{
       try { let d=await axios.post('https://614eacd3b4f6d30017b48344.mockapi.io/user',data)
       console.log(d)
       navigate('/all-students')
           
       } catch (error) {
           window.alert(error)
       }
    }
    return (
        <div className='margin'>
            <h1>Add Student</h1>
           <form onSubmit={formik.handleSubmit}>
           <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name'
                type='name'
                className="form-control"
                placeholder="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                            />

         {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>) : null}  
         <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
          
              />
      {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>): null}
               <label htmlFor="mobile">Mobile</label>
             <input
              id="mobile"
              name="mobile"
              type="mobile"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.mobile}
              className="form-control"
              placeholder="moblie"
              />
                   {formik.touched.mobile && formik.errors.mobile ? (<div style={{color:"red"}}>{formik.errors.mobile}</div>): null}
              <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              name="degree"
              type="degree"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.degree}
              className="form-control"
              placeholder="degree"
              />
                   {formik.touched.degree && formik.errors.degree ? (<div style={{color:"red"}}>{formik.errors.degree}</div>): null}
              <label htmlFor="dept">Department</label>
            <input
              id="dept"
              name="dept"
              type="dept"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.department}
              className="form-control"
               placeholder="dept"
              />
                   {formik.touched.dept && formik.errors.dept ? (<div style={{color:"red"}}>{formik.errors.dept}</div>): null},
     <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        </div>
    )
}

export default AddStudent
{/* <div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" value={name} class="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Mobile</label>
                    <input type="text" class="form-control" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Degree</label>
                    <input type="text" class="form-control" onChange={(e)=>setDegree(e.target.value)} placeholder="Degree"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Department</label>
                    <input type="text" class="form-control" onChange={(e)=>setDept(e.target.value)} placeholder="Department"/>
                </div>
                <button className="btn btn-primary" onClick={handleSave}>Submit</button>
            </div> */}
    