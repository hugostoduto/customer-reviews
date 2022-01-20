import { Review } from "../Reviews";
import costumers from "../../costumers";

export const Home = () => {
  const data = costumers;
  return (
    <div>
      <div>
        <Review review={data} />
      </div>
    </div>
  );
};
