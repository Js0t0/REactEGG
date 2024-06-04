import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import products from "../assets/products";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";

const Details = () => {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const onsale = products.filter((each) => each.onsale);
  if (product) {
    return (
      <>
        <NavBar />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product} />
              <Description product={product} />
              <Checkout product={product} />
            </div>
            <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div
                id="product-container"
                className={styles["product-container"]}
              >
                {onsale.map((i) => (
                  <ProductCard
                    key={i.id}
                    id={i.id}
                    title={i.title}
                    price={i.price}
                    color={i.colors[0]}
                    image={i.images[0]}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Hero first={"Producto"} second={"No Encontrado"} />
      <main></main>
      <Footer />
    </>
  );
};

export default Details;
