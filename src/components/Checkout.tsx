import styles from "../views/Details.module.css";
import { useState, useRef, useEffect } from "react";

const Checkout = ({ product }) => {
  const [contador, setContador] = useState(1);
  const [boton, setBoton] = useState(false);
  const units = useRef(1);

  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productsOnCart.find((item) => item.id === product.id);
    if (one) {
      setContador(one.units);
      setBoton(true);
    } else {
      setContador(1);
      setBoton(false);
    }
  }, [product.id]);

  let productsInStorage = [];
  !localStorage.getItem("cart")
    ? localStorage.setItem("cart", JSON.stringify([]))
    : (productsInStorage = JSON.parse(localStorage.getItem("cart")));

  const manageCart = () => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    }
    const one = productsInStorage.find((each) => each.id === product.id);
    if (!one) {
      product.units = contador;
      productsInStorage.push(product);
      setBoton(true);
    } else {
      setBoton(false);

      productsInStorage = productsInStorage.filter(
        (each) => each.id !== product.id
      );
    }
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
          <span className={styles["checkout-total-label"]}>Total:</span>
          <h2 id="price" className={styles["checkout-total-price"]}>
            ${(product.price * contador).toLocaleString()}
          </h2>
          <p className={styles["checkout-description"]}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
            haciendo la solicitud en AFIP.
          </p>
          <ul className={styles["checkout-policy-list"]}>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="../public/truck.png" alt="Truck" />
              </span>
              <span className={styles["policy-desc"]}>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="../public/plane.png" alt="Plane" />
              </span>
              <span className={styles["policy-desc"]}>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className={styles["checkout-process"]}>
            <div className={styles["top"]}>
              <input
                id="input-quantity"
                type="number"
                min="1"
                defaultValue={contador}
                ref={units}
                onChange={(e) => setContador(Number(e.target.value))}
              />
              <button
                type="button"
                className={boton ? styles["remove-btn"] : styles["cart-btn"]}
                onClick={manageCart}
              >
                {boton ? "Remueve del carrito" : "Añade al carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
