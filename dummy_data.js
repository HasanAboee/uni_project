const DUMMY_DATA = [
  {
    id: "fig1",
    title: "سید علی ملک ‌حسینی",
    image: "/Malek_Hosseini.jpg",
    face: "چهره های ماندگار: پزشکی و علوم تجربی",
    birthday: "1310-5-16",
    description:
      "جراح و عضو هیئت علمی دانشگاه علوم پزشکی شیراز است.او نخستین پیوند کبد در ایران از فرد زنده به زنده را انجام داد و به عنوان پدر پیوند کبد در ایران شناخته می‌شود. ملک‌حسینی انجام‌دهنده نخستین پیوند کبد در ایران، نخستین پیوند کبد از فرد زنده به فرد زنده در ایران و نخستین پیوند از یک کبد به دو نفر و همچنین بنیانگذار بخش پیوند اعضا بیمارستان نمازی و بیمارستان پیوند اعضا ابوعلی سینا است.",
  },
  {
    id: "fig2",
    title: "مجید سمیعی",
    image: "/samie.jpg",
    face: "چهره های ماندگار: پزشکی و علوم تجربی",
    birthday: "1316-3-29",

    description:
      "پزشک و جراح مغز و اعصاب ایرانی است. او در حال حاضر ریاست بیمارستان خصوصی علوم عصبی هانوفر در آلمان را بر عهده دارد که خود بنیان‌گذار آن بوده‌است.",
    isFeatured: true,
  },
  {
    id: "fig6",
    title: "باقر آیت‌الله‌زاده شیرازی",
    image: "/shirazi.jpg",
    face: "چهره های ماندگار: مهندسی",
    birthday: "1315-6-1",
    description:
      "معمار، مرمت‌گر، استاد دانشگاه، چهره ماندگار عرصه معماری، حفاظت و مرمت بناهای تاریخی ایران و عضو پیوسته فرهنگستان هنر جمهوری اسلامی ایران بود.او به عنوان بنیان‌گذار مرمت علمی بناها، محوطه‌ها و بافت‌های تاریخی در ایران و از بنیان‌گذاران سازمان میراث فرهنگی کشور شناخته میشود.",
  },
  {
    id: "fig5",
    title: "مرتضی سهرابی",
    image: "/sohrabi.jpg",
    face: "چهره های ماندگار: مهندسی",
    birthday: "1324-4-15",
    dead: "",
    description:
      "استاد مهندسی شیمی و به عنوان چهرهٔ ماندگار رشتهٔ مهندسی شیمی در سال ۱۳۸۰ برگزیده شد. دکتر مرتضی سهرابی از اعضای پیوسته فرهنگستان علوم جمهوری اسلامی ایران بود.",
  },
  {
    id: "fig3",
    title: "محمدحسین ماندگار",
    image: "/figure3.jpg",
    birthday: "1333-6-16",
    face: "چهره های ماندگار: پزشکی و علوم تجربی",
    description:
      "دکتر ماندگار از چهره های ماندگار مهارت در جراحی پیوند قلب را در سال‌های متمادی و در شهرهای مختلف دنیا به‌دست آورد.وی این دوره را ابتدا در سال۱۹۸۸ درلوزان، سپس در سال۱۹۹۰ در پاریس و بعد در سال ۱۹۹۱ در لندنو در نهایت در سال ۱۹۹۲ در وین گذراند",
    isFeatured: true,
  },
  {
    id: "fig4",
    title: "سید محمود دعایی",
    birthday: "1320-1-30",
    knowledge: "تحصیلات: حوزه علمیه قم",
    image: "/figure1.jpg",
    face: "چهره های ماندگار: روحانی و سیاسی",
    description:
      "اصغر صوفی: نه در حرف و شعار که در عمل به ملزومات میانه‌روی، عقلانیت و اعتدال پایبند است؛نامش با روزنامه «اطلاعات» پیوند خورده است و نام این روزنامه هم با نام وی. سیدمحمود دعایی،بهترین توصیف را درباره خود بیان می‌کند: «من دیرپاترین مسئولی هستم که در این نظام تمل شدم.",
    isFeatured: false,
  },
];
export default DUMMY_DATA;

export function getFiguere() {
  return DUMMY_DATA.filter((figure) => figure.isFeatured);
}
export function getAllFigures() {
  return DUMMY_DATA;
}
export function getFacesById(id) {
  return DUMMY_DATA.find((face) => face.id === id);
}
export function getFilteredFaces(title = "", face = "") {
  const data = JSON.parse(localStorage.getItem("data"));
  return data.filter(
    (el) => el.title.includes(title) || el.face.includes(face)
  );
}
export function getFilteredDate(dateFilter) {
  const { year, month } = dateFilter;
  let filteredFaces = DUMMY_DATA.filter((face) => {
    const DateBirth = new Date(face.birthday);
    return (
      DateBirth.getFullYear() === year && DateBirth.getMonth() === month - 1
    );
  });
  return filteredFaces;
}

export function readDataFromLocalStorage(setData) {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    setData(data);
  }
}

export function addDataToLocalStorage(new_data_to_add, setData) {
  const data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    const new_data = [...data, new_data_to_add];
    setData(new_data);
    localStorage.setItem("data", JSON.stringify(new_data));
  }
}

export function reWriteLocalStorage(new_data_to_add, setData) {
  localStorage.removeItem('data')
  setData(new_data_to_add);
  localStorage.setItem("data", JSON.stringify(new_data_to_add));
}
