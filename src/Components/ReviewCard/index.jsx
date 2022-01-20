export const ReviewCard = ({ name, photo, body, id }) => (
  <div className="review">
    <img src={photo} alt={photo} />
    <div className="post-content">
      <h2>{name}</h2>
      <p>{body}</p>
    </div>
  </div>
);
