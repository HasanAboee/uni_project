import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFacesById } from "../../dummy_data";
import FaceContent from "../../components/face-detail/face-content";
import FaceLogistics from "../../components/face-detail/face-logistics";
import FaceSummary from "../../components/face-detail/face-summary";
function DetailedFace() {
  const router = useRouter();
  const faceId = router.query.faceId;
  const face = getFacesById(faceId);
  if (!face) {
    return <p>We dont have this figure!</p>;
  }
  return (
    <Fragment>
      <FaceSummary title={face.title} />
      <FaceLogistics image={face.image} imageAlt={face.title}/>
      <FaceContent>
        <p>{face.description}</p>
      </FaceContent>
    </Fragment>
  );
}
export default DetailedFace;
