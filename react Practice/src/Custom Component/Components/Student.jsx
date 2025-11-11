import Table from '../Common Components/Table'
import { StudentData } from '../Data/Studentdata'

console.log(Object.keys(StudentData[0]))


const Student=(()=>{
    const columns=Object.keys(StudentData[0])

    
    return(<>
    <h1>Student Data:</h1>
    <button type="button">Add</button>
    
    <Table columns={columns} data={StudentData}/>
    
    </>)




})
export default Student