import React, { useState, useEffect } from "react";

function SecondButton() {
  const [headerTitle, setHeaderTitle] = useState("First title");
  // state obj - function to update THIS state
  const [header, setHeader] = useState("First Header");
  const [footer, setFooter] = useState("First Footer");

  useEffect(() => {
    console.log("Hello World");
  }, []);

  useEffect(() => {
    console.log("updated header title");
  }, [headerTitle]);

  const changeTitle = () => {
    setHeaderTitle("Second Header Title");
  };

  const changeFooter = () => {
    setFooter("Second Footer");
  };

  return (
    <div>
      <h1> {headerTitle} </h1>
      <button onClick={() => changeTitle()}> I should be clicked</button>
      <button onClick={() => changeFooter()}> I should be clicked for the footer</button>
      <h3> {footer} </h3>
    </div>
  );
}

export default SecondButton;
