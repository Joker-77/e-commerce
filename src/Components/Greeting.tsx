import React from "react";

interface IGreetingProps {
  firstName: string;
  lastName: string;
  message: string;
}
const Greeting: React.FC<IGreetingProps> = ({ ...props }) => {
  // return React.createElement("h2", {}, "Hello world!");
  return (
    <h2>
      {props.message} {props.firstName} {props.lastName}
    </h2>
  );
  // return <img src="./images/8.jpg" alt="Hello world!" />;
};

export default Greeting;
