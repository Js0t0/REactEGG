import styles from "./Onsale.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OnSaleCard from "../components/OnSaleCard";
import products from "../assets/products";
import { useState } from "react";

function Onsale() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onsale = products.filter((each) => each.onsale);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % onsale.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + onsale.length) % onsale.length
    );
  };

  const displayedProducts = onsale
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(
      onsale.slice(0, Math.max(0, currentIndex + itemsPerPage - onsale.length))
    );
  return (
    <>
      <NavBar />

      <main>
        <div className={styles["handle-button"]} onClick={handlePrev}>
          &#x21da;
        </div>
        <div className={styles["product-container"]} id="products">
          {displayedProducts.map((each) => (
            <OnSaleCard
              key={each.id}
              title={each.title}
              price={each.price}
              image={each.images[0]}
            />
          ))}
        </div>
        <div className={styles["handle-button"]} onClick={handleNext}>
          &#x21db;
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Onsale;
