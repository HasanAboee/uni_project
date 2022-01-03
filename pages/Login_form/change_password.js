import PasswordForm from "../../components/form/password_form";
function changePassword() {
  async function chnagePasswordHandler(passwordData) {
    const response = await fetch("/api/user/changePassword", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return <PasswordForm onChangePassword={chnagePasswordHandler} />;
}
export default changePassword;
