import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    sla
  } = resData?.info;
  // console.log(info);

  return (
    <div
      className="restaurant-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="restau-img"
        alt="picture-restau"
        src={ CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{avgRatingString}</h5>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
