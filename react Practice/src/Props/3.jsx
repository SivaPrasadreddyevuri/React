const C3 = ({ data }) => {
  // console.log(data[2].Name)
  return (
    <>
      <table border={2} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Age</th>
            <th>Group</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((St, index) => {
            return (
              <tr key={index}>
                <td>{St.Sno}</td>
                <td>{St.Name}</td>
                <td>{St.Age}</td>
                <td>{St.Group}</td>
                <td>{St.Phone}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}

          {data
            .filter((St) => St.Group === "a")
            .map((St, index) => (
              <h1 key={index}>{St.Name}</h1>
            ))}
        </tbody>
        
      </table>
    </>
  );
};
export default C3;
