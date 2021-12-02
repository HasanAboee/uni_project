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

  const { onSubmit , setMonth, setYear, month, year } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
        <button type="submit">پیدا کن!</button>
          <label htmlFor="year">سال</label>
          <select id="year" onChange={(e) => setYear(e.target.value)} value={year} >
            <option value="1370">1370</option>
            <option value="1320">1320</option>
            <option value="1371">1371</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">ماه</label>
          <select id="month" onChange={(e) => setMonth(e.target.value)} value={month} >
            <option value="1">فروردین</option>
            <option value="2">اردیبهشت</option>
            <option value="3">خرداد</option>
            <option value="4">تیر</option>
            <option value="5">مرداد</option>
            <option value="6">شهریور</option>
            <option value="7">مهر</option>
            <option value="8">آبان</option>
            <option value="9">آذر</option>
            <option value="10">دی</option>
            <option value="11">بهمن</option>
            <option value="12">اسفند</option>
          </select>
        </div>
      </div> 
    </form>
  );
}
