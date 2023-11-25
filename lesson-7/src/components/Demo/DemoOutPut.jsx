import React, {memo} from "react";
import MyParagraph from "./MyParagraph";

const DemoOutPut = (props) => {
  return <MyParagraph>{props.show ? 'This is Page!' : ''}</MyParagraph>
};

export default DemoOutPut;