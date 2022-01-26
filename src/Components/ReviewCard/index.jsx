import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export const ReviewCard = ({ name, photo, body, id }) => (
  <>
    <div className="review-container">
      <div className="review">
        <div className="user">
          <img src={photo} alt={photo} />
          <p>{name}</p>
        </div>
        <div className="text">
          <p>{body}</p>
        </div>
        <div className="aspas">
          <FontAwesomeIcon className="aspasL" icon={faQuoteLeft} />
          <FontAwesomeIcon className="aspasR" icon={faQuoteRight} />
        </div>
      </div>
    </div>
  </>
);
