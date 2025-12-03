import React from "react";
// import Parent from "./Parent"; // Commented out as it's not used
import { StudentData } from "../Custom Component/Data/Studentdata";

class Child extends React.Component {
  constructor(props) {
    super(props); // Call super first
    const StudentData = props.data;
    console.log("8", StudentData);
  }

  render() {
    return (
      <>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam
          corporis cumque unde, sint enim esse sit vero maxime, perspiciatis
          reprehenderit illum. Dolore laborum tempore dicta vitae perspiciatis
          nesciunt quaerat.
        </h1>
        {StudentData.map((st) => {
          return (
            <>
              <div>{st.name ? st.name : "Unknown"}</div>
            </>
          );
        })}
      </>
    );
  }
}

export default Child;
