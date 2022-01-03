import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { getFacesById } from "../../dummy_data";
import FaceContent from "../../components/face-detail/face-content";
import FaceLogistics from "../../components/face-detail/face-logistics";
import FaceSummary from "../../components/face-detail/face-summary";
import axios from 'axios';

function DetailedFace() {
  const router = useRouter();
  const faceId = router.query.faceId;
  const [face , setFace] = useState()
 
  async function getData() {
   
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:4000/celebrities/" + router.query.faceId,
      });
      setFace(res.data);
      console.log(res.data)
    } catch (error) {
      if (error?.response?.data) {
        console.error(error.response.data)
      } else {
        console.error(error)
      }
    }
  }

  useEffect(() => {
      if(router.query?.faceId){
        getData()
      }
  } , [router])

  
  if (!face) {
    return <p>لطفا صبر کنید</p>
  }
  return (
    <Fragment>
    <FaceSummary title={face.title} />
    <FaceLogistics image={face.image} face={face.face} imageAlt={face.title} date={face.birthday} knowledge={face.knowledge} />
    <FaceContent>
      <p>{face.description}</p>
    </FaceContent>
  </Fragment>
  );
}
export default DetailedFace;
