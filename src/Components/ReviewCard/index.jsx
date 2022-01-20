import "./style.css";
export const ReviewCard = ({ name, photo, body, id }) => (
  <div className="review">
    <div className="user">
      <img src={photo} alt={photo} />
      <p>{name}</p>
    </div>
    <div className="text">
      <p>{body}</p>
    </div>
  </div>
);
