import C2 from "./2";
import { data } from "../data/studentdata";

// const data = [
//   {
//     Sno: 1,
//     Name: "Ravi",
//     Age: 20,
//     Group: "b",
//     Phone: "9876543210",
//   },
//   {
//     Sno: 2,
//     Name: "Priya",
//     Age: 22,
//     Group: "a",
//     Phone: "9123456780",
//   },
//   {
//     Sno: 3,
//     Name: "Arjun",
//     Age: 21,
//     Group: "c",
//     Phone: "9988776655",
//   },
// ];

const C1 = () => {
    // let Name="Siva";
    // let Age="23";
  return (
    <>
      {/* <C2 name={Name} age={Age} /> */}
      <C2 data={data}/>
    </>
  );
};
export default C1;
