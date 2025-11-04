import { Student_data } from "./data/StudentsData";
import "./card.css"
const Card=()=>{
         return(
            <div className="Card_Container">
               {Student_data.map((student,index)=>{
                return(
                    <>
                    <div key={index}>
                       <h5>Name:{student.Name}-10000coders</h5>
                    </div>
                    <div className="body">
                        <p>{student.email}</p>
                        <p>{student.age}</p>
                        <p>{student.mobile_number}</p>
                    </div>
                    </>
                    
                )
               })}
            </div>
         )
}
export default Card