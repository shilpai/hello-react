import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import { Component } from "react";

// ClassBase Component
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constuctor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Parent componentDidMount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About Us</h1>
        <h2>helloo about us</h2>
        <UserClass
          name={"First Child"}
          location={"Gadchiroli, Maharashtra"}
          contact={"shilpasonule12@gmail.com"}
        />

        {/* <UserFunction
        name={"Jigiksha Zade"}
        location={"Pune, Maharashtra"}
        jobRole={"Radiograpgher"}
      /> */}
      </div>
    );
  }
}

// Functional Component
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>helloo about us</h2>
//       <UserClass
//         name={"Shilpa Sonule"}
//         location={"Gadchiroli, Maharashtra"}
//         contact={"shilpasonule12@gmail.com"}
//       />

//       {/* <UserFunction
//         name={"Jigiksha Zade"}
//         location={"Pune, Maharashtra"}
//         jobRole={"Radiograpgher"}
//       /> */}
//     </div>
//   );
// };

export default About;
