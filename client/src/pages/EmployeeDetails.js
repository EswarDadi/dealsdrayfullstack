import axios from "axios"
import {useEffect,useState} from "react"

function EmployeeDetails(){
    const [employeeList,setEmployeeList]=useState([])
    useEffect(()=>{

        axios.get('http://localhost:3008/employee').then((response)=>{
            console.log(response.data)
            setEmployeeList(response.data)
        })

    },[])
    return(
        
        <div>
            {employeeList.map((value,key)=>{
                const imageUrl = `http://localhost:3008/images/${value.f_Image}`
                
                return <div key={key} className="employee-list-container">
                    <p>{value.f_Id}</p>
                    <img src={imageUrl} alt="employee"/>

                    <p>{value.f_Name}</p>
                    <p>{value.f_Email}</p>
                    <p>{value.f_Mobile}</p>
                    <p>{value.f_Designation}</p>
                    <p>{value.f_Gender}</p>
                    <p>{value.f_Course}</p>
                    <p>{value.createdAt}</p>
                </div>
            })}
        </div>
    )
}
export default EmployeeDetails