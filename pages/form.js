import Form from "../components/form/form";
// import { useHistory } from "react-router-dom"
// import AddHandler from  '../api/AddHandler'

function NewForm(){
//     const history= useHistory();

    // const handleAddMeetup = async (data) =>{
    //     await AddHandler(data);
    //     history.replace('/')
    // }
  
    return( 
    <section>
        <h1>اضافه کردن چهره جدید</h1>
        <Form />
    </section>
    );
}
export default NewForm;