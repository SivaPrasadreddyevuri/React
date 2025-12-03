const Table = (props) => {
  const data = props.data;
  const columns = Object.keys(data[0]);
  console.log(columns);
  return (
    <>
      <table border={2} cellSpacing={0}>
        <thead>
          {columns.map((heading, index) => {
            return <th key={index}>{heading}</th>;
          })}
        </thead>
        <tbody>
            {
                data.map((st,index)=>{
                    return(<>
                       <tr key={index}>
                        {
                            columns.map((heading)=>{
                                    
                               return(
                                 <td>{st[heading]?`${st[heading]}`:"-"}</td>
                               )
                            })
                        }

                       </tr>
                    </>)
                })
            }
        </tbody>
      </table>
    </>
  );
};
export default Table;
