import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({totalStars}) => {
  const [rating, setRating] = useState(totalStars);
  const [hover, setHover] = useState(null);

  return (
    <div style={{ padding: "5px" }}>
      

      <div style={{ display: "flex", gap: "10px",marginTop: "0px" }}>
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;

          return (
            <FaStar
              key={starValue}
              size={20}
              color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              // onClick={() => setRating(starValue)}
              // onMouseEnter={() => setHover(starValue)}
              // onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>

      {/* <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Selected Rating: {rating}
      </p> */}
    </div>
  );
};

export default Rating;
