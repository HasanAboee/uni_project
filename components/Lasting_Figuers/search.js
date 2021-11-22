import styles from './search.module.css'
import { useRef } from 'react';
function FaceSearch(props) {
    const title = useRef();
    const face = useRef();
    function SubmitHandler(e){
        e.preventDefault();
        const enteredTitle = title.current.value;
        const enteredFace = face.current.value;
        props.OnSearch(enteredTitle,enteredFace)
    }
  return (
    <div className={styles.search_container}>
      <form action="/action_page.php" onSubmit={SubmitHandler}>
        <input type="text" placeholder="چهره موردنظر" name="name" ref={title}/>
        <input type="text" placeholder="دسته" name="category" ref={face}/>
        <button type="submit">
          جستجو
        </button>
      </form>
    </div>
  );
}
export default FaceSearch;
