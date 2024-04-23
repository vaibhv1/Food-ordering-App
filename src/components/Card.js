import { IMG_URL } from "./constants";

var RestrauntCard = ({name,cloudinaryImageId, avgRating,cuisines} ) => {
    return (
      <div id="card">
        <img alt="Pizza" src={IMG_URL+cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{avgRating} stars</h4>
        {/* <h4>{cuisines.join(",")}</h4>  */}
      </div>
    );
  };

  export default RestrauntCard;