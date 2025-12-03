const Table = (props) => {
  const data = props.data;
  const columns = props.columns;
  console.log(columns);
  return (
    <>
      <table border={3} cellSpacing={0}>
        <thead>
          <tr>
            {columns.map((heading, index) => {
              return <th key={index}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                {columns.map((heading, index) => {
                  return <td key={index}>{data[heading]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
