import React from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./src/components/Heading";
import  Body  from "./src/components/Body";
import {Footer} from "./src/components/Footer";
const HomePage = () => {
  return (
    <>
      <Heading />
      <Body /> 
      <Footer/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);
