import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Default ",
      },
    };
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount");
    // API call
    const data = await fetch("https://api.github.com/users/shilpai");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  // componentDidUpdate() {
  //   console.log("Child componentDidUpdate ");
  // }


  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;

    console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location:{location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
