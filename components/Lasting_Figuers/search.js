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
  const { onSubmit, setMonth, setYear, month, year } = props;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <button type="submit">پیدا کن!</button>
          <label htmlFor="year">سال</label>
          <select
            id="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          >
            <option value="1310">1310</option>
            <option value="1311">1311</option>
            <option value="1312">1312</option>
            <option value="1313">1313</option>
            <option value="1314">1314</option>
            <option value="1315">1315</option>
            <option value="1316">1316</option>
            <option value="1317">1317</option>
            <option value="1318">1318</option>
            <option value="1319">1319</option>
            <option value="1320">1320</option>
            <option value="1321">1321</option>
            <option value="1322">1322</option>
            <option value="1323">1323</option>
            <option value="1324">1324</option>
            <option value="1325">1325</option>
            <option value="1326">1326</option>
            <option value="1327">1327</option>
            <option value="1328">1328</option>
            <option value="1329">1329</option>
            <option value="1330">1330</option>
            <option value="1331">1331</option>
            <option value="1332">1332</option>
            <option value="1333">1333</option>
            <option value="1334">1334</option>
            <option value="1335">1335</option>
            <option value="1336">1336</option>
            <option value="1337">1337</option>
            <option value="1338">1338</option>
            <option value="1339">1339</option>
            <option value="1340">1340</option>
            <option value="1341">1341</option>
            <option value="1342">1342</option>
            <option value="1343">1343</option>
            <option value="1344">1344</option>
            <option value="1345">1345</option>
            <option value="1346">1346</option>
            <option value="1347">1347</option>
            <option value="1348">1348</option>
            <option value="1349">1349</option>
            <option value="1350">1350</option>
            <option value="1351">1351</option>
            <option value="1352">1352</option>
            <option value="1353">1353</option>
            <option value="1354">1354</option>
            <option value="1355">1355</option>
            <option value="1356">1356</option>
            <option value="1357">1357</option>
            <option value="1358">1358</option>
            <option value="1359">1359</option>
            <option value="1360">1360</option>
            <option value="1361">1361</option>
            <option value="1362">1362</option>
            <option value="1363">1363</option>
            <option value="1364">1364</option>
            <option value="1365">1365</option>
            <option value="1366">1366</option>
            <option value="1367">1367</option>
            <option value="1368">1368</option>
            <option value="1369">1369</option>
            <option value="1370">1370</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">ماه</label>
          <select
            id="month"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
          >
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
