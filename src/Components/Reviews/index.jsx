import { ReviewCard } from "../ReviewCard";
import costumers from "../../costumers";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Review = () => {
  const [review, setReview] = useState(0);
  const data = costumers;
  const page = data.length;
  const atual = [page];

  const nextReview = () => {
    setReview(review === page - 1 ? 0 : review + 1);
  };
  const prevReview = () => {
    setReview(review === 0 ? -1 : review - 1);
  };
  return (
    <>
      <div className="reviews">
        {costumers.map((data, index) => {
          return (
            <>
              {index === review && (
                <ReviewCard
                  key={data.id}
                  name={data.name}
                  body={data.body}
                  photo={data.photo}
                  alt={data.photo}
                />
              )}
            </>
          );
        })}
        <div className="menu">
          <FontAwesomeIcon
            className="button"
            onClick={prevReview}
            icon={faArrowLeft}
          />
          <p>
            {review + 1}/{page}
          </p>

          <FontAwesomeIcon
            className="button"
            onClick={nextReview}
            icon={faArrowRight}
          />
        </div>
      </div>
    </>
  );
};
