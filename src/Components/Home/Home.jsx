import { Review } from "../Reviews";
import costumers from "../../costumers";

export const Home = () => {
  const data = costumers;
  return (
    <div>
      <h1>Opinião dos Clientes</h1>
      <p>O que nossos clientes tem a dizer.</p>
      <Review review={data} />
    </div>
  );
};
