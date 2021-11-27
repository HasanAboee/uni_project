import styles from "./search.module.css";
import { useRef } from "react";
function FaceSearch(props) {
  const title = useRef();
  const face = useRef();
  function SubmitHandler(e) {
    e.preventDefault();
    const enteredTitle = title.current.value;
    const enteredFace = face.current.value;
    props.OnSearch(enteredTitle, enteredFace);
  }
  return (
    <div className={styles.search_container}>
      <form action="/action_page.php" onSubmit={SubmitHandler}>
        <input type="text" placeholder="چهره موردنظر" name="name" ref={title} />
        <input type="text" placeholder="دسته" name="category" ref={face} />
        <button type="submit">جستجو</button>
      </form>
    </div>
  );
}
export default FaceSearch;

export function Report(props) {
  const yearInputRef=useRef();
const monthInputRef=useRef();
function Submit(event){
  event.preventDefault();
  const selectedYear=yearInputRef.current.value;
  const selectedMonth=monthInputRef.current.value;
  props.onSearch(selectedYear,selectedMonth)
}
  return (
    <form className={styles.form} onSubmit={Submit}>
      <div className={styles.controls}>
        <div className={styles.control}>
        <button>Find Event</button>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">Junr</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      
    </form>
  );
}
