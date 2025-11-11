const Table = (props) => {
  //   console.log("2", column);
  //   console.log("2", );
  return (
    <>
      <table border={3} cellSpacing={0}>
        <thead>
          <tr>
            {props.columns.map((heading, index) => {
              return <th key={index}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, Index) => {
            return(
              <tr key={Index}>
                {props.columns.map((columns, index) => (
                <td key={index}>{data[columns]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
