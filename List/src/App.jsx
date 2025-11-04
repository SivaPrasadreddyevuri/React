import "./App.css"
import { Student_data } from "./data/StudentsData"
const Filtered_Data=Student_data.filter((student)=>{
  return student.isPresent
})
console.log(Filtered_Data)

const Table=()=>{
  return(
    <table border={1} cellSpacing={0} style={{textAlign:"center"}} cellPadding={20}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Attendeces</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {Filtered_Data.map((student,index)=>{
              return <tr key={student.id||index}>
                <td>{student.id}</td>
                <td>{student.Name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.mobile_number}</td>
                <td>{student.isPresent?"Present":"0"}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
    </table>
  )
}
export default Table
                                                                                                                                                                                                                                                                