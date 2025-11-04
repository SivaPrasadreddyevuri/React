import Child2 from "./Child2";

const Child1 =(props) => {
  // console.log(props.data)
  return (
    <>
      <h1>Student Details</h1>
      <table border={4} cellPadding={30}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
        {props.data.map((value,index)=>{
        <tr key={index}>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.age}</td>
       
    </tr>
   })}
        </tbody>
      </table>
    </>
  );
};
export default Child1;
     