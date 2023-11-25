import {memo} from "react";

const MyParagraph = (props) => {
  console.log('MyParagraph');
  return <p>{props.children}</p>
};

export default memo(MyParagraph);