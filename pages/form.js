import Form from "../components/form/form";
import AddHandler from "./api/addHandler";

function NewForm() {

  return (
    <section>
      <h1>اضافه کردن چهره جدید</h1>
      <Form onAddFace={AddHandler} />
    </section>
  );
}
export default NewForm;
