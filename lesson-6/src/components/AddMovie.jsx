import {useRef} from "react";
import classes from "./AddMovie.module.css";
const AddMovie = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddMovie({
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value
    });
  }


  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef}/>
      </div>
      <div  className={classes.control}>
        <label htmlFor='openning-text'>Opening Text</label>
        <textarea rows='5' id='opemning-text' ref={openingTextRef}/>
      </div>
      <div  className={classes.control}>
        <label htmlFor='date'>Date</label>
        <input type='text' id='date' ref={releaseDateRef}/>
      </div>
      <button>Add Movie</button>
    </form>
  )
};


export default AddMovie;