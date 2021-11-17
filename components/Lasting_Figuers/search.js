import styles from './search.module.css'
import { Ref, useRef } from 'react';
function FaceSearch(props) {
    const name = useRef();
    const category = useRef();
    function SubmitHandler(e){
        e.preventDefault();
        const enteredName = name.current.value;
        const enteredCategory = category.current.value;
        props.OnSearch(enteredName,enteredCategory)
    }
  return (
    <div className={styles.search_container}>
      <form action="/action_page.php" onSubmit={SubmitHandler}>
        <input type="text" placeholder="چهره موردنظر" name="search" ref={name}/>
        <input type="text" placeholder="دسته" name="category" ref={category}/>
        <button type="submit">
          جستجو
        </button>
      </form>
    </div>
  );
}
export default FaceSearch;
