import Table from '../Common Components/Table'
import { StaffData } from '../Data/Staffdata'

const Staff=()=>{

  let columns=Object.keys(StaffData[0])
    return(<>
     <h1>Staff Data:</h1>
    <button type="button">Add</button>
        <Table columns={columns} data={StaffData}/>
    </>)
}
export default Staff