import {StudentsData} from "../data/studentdata"
// const StudentsData = [
//   {
//     id: 1,
//     name: "Arjun Patel",
//     age: 14,
//     grade: 8,
//     email: "arjun.patel@email.com"
//   },
//   {
//     id: 2,
//     name: "Priya Sharma",
//     age: 15,
//     grade: 9,
//     email: "priya.sharma@email.com"
//   },
//   {
//     id: 3,
//     name: "Rahul Gupta",
//     age: 13,
//     grade: 7,
//     email: "rahul.gupta@email.com"
//   },
//   {
//     id: 4,
//     name: "Meera Reddy",
//     age: 16,
//     grade: 10,
//     email: "meera.reddy@email.com"
//   },
//   {
//     id: 5,
//     name: "Anjali Kapoor",
//     age: 14,
//     grade: 8,
//     email: "anjali.kapoor@email.com"
//   }
// ];
const StudentTable=()=>{
   
return(
<>
<table border={1} cellSpacing={0} cellPadding={35}>
    <thead>
      <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>GRADE</th>
      <th>EMAIL</th>
      </tr>
    </thead>
    <tbody>
           {StudentsData.map((student,index)=>{
              return(
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>{student.email}</td>
                </tr>
              )
           })}   
    </tbody>
</table>
</>)
}
export default StudentTable