import { Review } from "../Reviews";
import "./style.css";

export const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <h1>Opinião dos Clientes</h1>
        <p>O que nossos clientes tem a dizer.</p>
      </div>
      <Review />
    </>
  );
};
