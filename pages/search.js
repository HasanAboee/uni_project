import { Fragment, useEffect, useState } from "react";
import FaceSearch, { Report } from "../components/Lasting_Figuers/search";
import router from "next/router";
import FigureItems from "../components/Lasting_Figuers/Figure_items";
import { getFilteredFaces, readDataFromLocalStorage } from "../dummy_data";
function Search() {
  const [DUMMY_DATA , setDUMMY_DATA] = useState([])
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [data, setData] = useState([]);



  function handleOnSearch (a,b) {
    const result = getFilteredFaces(a,b);
    setData(result)
  }

   function onSubmit(e) {
    e.preventDefault();

    const FilteredData = DUMMY_DATA.filter((el) => {
      let birth = el.birthday.split("-");
      if (month && year) {
        if (month === birth[1] && year === birth[0]) return el;
      }
      if (month) {
        if (month === birth[1]) return el;
      }
      if (year) {
        if (year === birth[0]) return el;
      }
    });
    setData(FilteredData);
  }

  useEffect(() => {
    readDataFromLocalStorage(setDUMMY_DATA) 
  },[])

  return (
    <Fragment>
      <Report
        onSubmit={onSubmit}
        setMonth={setMonth}
        setYear={setYear}
        month={month}
        year={year}
      />
      <FaceSearch OnSearch={handleOnSearch}/>
      {data.map((figure) => (
        <FigureItems
          key={figure._id}
          id={figure._id}
          title={figure.title}
          face={figure.face}
          image={figure.image}
          description={figure.description}
        />
      ))}
    </Fragment>
  );
}
export default Search;
