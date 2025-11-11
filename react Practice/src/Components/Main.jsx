import About from "../RoutingPages/About";
import Projects from "../RoutingPages/Projects";
import Skills from "../RoutingPages/Skills";
import { data } from "../data/studentdata";

const Info = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />

      <section id="Card-cobtainer">
        {data.map((st, index) => {
          return (
            <>
              <div id="card" key={index}>
                <div>{`Name:${st.Name}`}</div>
                <div>{`Age:${st.Age}`}</div>
                <div>{`Group:${st.Group}`}</div>
                <div>{`Phone:${st.Phone}`}</div>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </>
          );
        })}
      </section>

      <section id="Table-container">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Age</th>
              <th>Group</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((st, index) => {
              return <>
                <tr key={index}>
                    <td>{st.Sno}</td>
                    <td>{st.Name}</td>
                    <td>{st.Age}</td>
                    <td>{st.Group}</td>
                    <td>{st.Phone}</td>
                    <td>
                        <button>Edit</button><button>Delete</button>
                    </td>
                </tr>              
              
              
              
              </>;
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Info;
