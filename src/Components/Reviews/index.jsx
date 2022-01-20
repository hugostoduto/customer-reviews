import { ReviewCard } from "../ReviewCard";

export const Review = ({ review }) => (
  <div className="reviews">
    {review.map((review) => (
      <ReviewCard
        key={review.id}
        name={review.name}
        body={review.body}
        photo={review.photo}
        alt={review.photo}
      />
    ))}
  </div>
);
