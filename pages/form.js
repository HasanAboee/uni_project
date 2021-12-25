import Form from "../components/form/form";
import AddHandler from "./api/addHandler";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
function NewForm() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState();
  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/Login_form/login";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);
  // if (isLoading) {
  //   return <p className="center">در حال بارگزاری...</p>;
  // }
  return (
    <section>
      <h1>اضافه کردن چهره جدید</h1>
      <Form />
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/Login_form/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default NewForm;
