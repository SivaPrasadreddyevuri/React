const Child2=(props)=>{
//    console.log(props.props.data)
   return(
    <>
    {props.props.data.map((value,index)=>{
    <tr key={index}>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.age}</td>
       
    </tr>
   })}
   
    </>
   )
  }
  export default Child2
// const Alert=()=>alert("hello")
// export default Alert