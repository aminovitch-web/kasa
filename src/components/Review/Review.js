import redstar from "../../assets/redStar.png";
import greystar from "../../assets/greyStar.png";

import "./_review.scss";

export default function Review(props) {
  const rating = props.rating;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">

      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
}

