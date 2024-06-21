import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useState} from "react"

function CreateEmp(){
    const [selectFile,setSelectFile]=useState("")
    const initailValues={
        f_Name:"",
        f_Email:"",
        f_Mobile:"",
        f_Designation:"",
        f_Gender:"",
        f_Course:"",
        f_Image:null
    }
    const validationSchema=Yup.object().shape({
        f_Name:Yup.string().required("Required"),
        f_Email:Yup.string().required("Required"),
        f_Mobile:Yup.string().required("Required"),
        f_Designation:Yup.string().required('Required'),
        f_Course:Yup.string().required('Required'),
        f_Image:Yup.mixed().required("Required")
    })
    const handleFileChange=(event,setFieldValue)=>{
        const file=event.currentTarget.files[0];
        setSelectFile(file);
        setFieldValue("f_Image", file);
    }
    const onSubmit=async(values,{setSubmitting,resetForm})=>{
        const formData=new FormData()
        formData.append("f_Name",values.f_Name);
        formData.append("f_Email",values.f_Email);
        formData.append("f_Mobile",values.f_Mobile);
        formData.append("f_Designation",values.f_Designation);
        formData.append("f_Gender",values.f_Gender);
        formData.append("f_Course",values.f_Course);
        formData.append("f_Image",selectFile)
        try{
            axios.post("http://localhost:3008/employee",formData,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },
                
            })
        }catch(error){
            console.log(error)
        }finally{
            setSubmitting(false)
        }
    }
    return(
        <div className="createEmployeePage">
           
           <Formik initialValues={initailValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({setFieldValue,isSubmitting})=>(
                <Form className="formContainer">
                    <label>Name:</label>
                    <Field name="f_Name" autoComplete="off" placeHolder="Enter Name...." id="inputCreateEmployee"/>
                    <ErrorMessage name="f_Name" component="span"/>
                    <label>Email:</label>
                    <Field name="f_Email" autoComplete="off" placeHolder="Enter Email...." id="inputCreateEmployee"/>
                    <ErrorMessage name="f_Email" component="span"/>
                    <label>Phone:</label>
                    <Field name="f_Mobile" autoComplete="off" placeHolder="Enter Mobileno...." id="inputCreateEmployee"/>
                    <ErrorMessage name="f_Mobile" component="span"/>
                    <label>Designation:</label>
                    <Field name="f_Designation" autoComplete="off" placeHolder="Enter Designation...." id="inputCreateEmployee" as="select" >
                    <option value="">Select Designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                    </Field>
                    <ErrorMessage name="f_Designation" component="span"/>
                    <label>
                    
                    <Field type="radio" name="f_Gender" value="Male" />
                        Male
                    </label>
                    <label>
                    <Field type="radio" name="f_Gender" value="Female" />
                        Female
                    </label>
                    
                    <ErrorMessage name="f_Gender" component="span"/>
                    
                    <label>Course:</label>
                    <Field name="f_Course" autoComplete="off" placeHolder="Type Course...." id="inputCreateEmployee"/>
                    <ErrorMessage name="f_Course" component="span"/>
                    
                    <input type="file" name="f_Image" onChange={(event)=>handleFileChange(event, setFieldValue)} />
                    <button type="submit" disabled={isSubmitting}>submit</button>
                </Form>

            )}
           </Formik>
           
        </div>
    )
}
export default CreateEmp