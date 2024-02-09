import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    delieveryTime,
    address,
  } = resData?.data;

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
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h6>{cuisines.join(" , ")}</h6>
      <h6>{delieveryTime}</h6>
      <h6>{address}</h6>
      <h6>{avgRating}</h6>
      {/* <h6>{resData.data.cloudinaryImgId}</h6> */}
    </div>
  );
};

export default RestaurantCard;
