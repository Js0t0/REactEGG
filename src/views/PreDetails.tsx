import styles from "./Details.module.css";
import products from "../assets/products";
import { useParams } from "react-router-dom";

const PreDetails = (props) => {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);

  return (
    <>
      <div>{props.id}</div>
      hola
      <p>{id}</p>
      <p>{product.images[0]}</p>
      <main>
        <div className={styles["details-container"]}>
          <section className={styles["product-images-block"]}>
            <div className={styles["product-images"]}>
              <img
                className={styles["mini-img"]}
                src={product.images[1]}
                alt="MacBook Pro 13'4"
              />
              <img
                className={styles["mini-img"]}
                src={product.images[2]}
                alt="MacBook Pro 13'4"
              />
            </div>
            <img
              className={styles["big-img"]}
              id="big-img"
              src={product.images[0]}
              alt="MacBook Pro 13'4"
            />
          </section>
          <div className={styles["product-description-block"]}>
            <h1 className={styles["product-title"]}>{product.title}</h1>
            <form className={styles["product-selector"]}>
              <fieldset className={styles["product-fieldset"]}>
                <label className={styles["product-label"]} htmlFor={"color"}>
                  Color
                </label>
                <select
                  className={styles["product-select"]}
                  typeof="text"
                  aria-placeholder="Selecciona un color"
                  id="color"
                >
                  {/* <option value="Silver">Silver</option> */}
                  {product.colors.map((i) => (
                    <option value={i}>{i}</option>
                  ))}

                  {/* {product.colors.map(each=><option value={each}>{each}</option>)} */}
                </select>
              </fieldset>
            </form>
            <div className={styles["product-description"]}>
              <span className={styles["product-label"]}>Descripción</span>
              <p>{product.description}</p>
            </div>
          </div>
          <div className={styles["product-checkout-block"]}>
            <div className={styles["checkout-container"]}>
              <span className={styles["checkout-total-label"]}>Total:</span>
              <h2 id="price" className={styles["checkout-total-price"]}>
                ${product.price}
              </h2>
              <p className={styles["checkout-description"]}>
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
              </p>
              <ul className={styles["checkout-policy-list"]}>
                <li>
                  <span className={styles["policy-icon"]}>
                    <img src="../public/truck.png" alt="Truck" />
                  </span>
                  <span className={styles["policy-desc"]}>
                    Agrega el producto al carrito para conocer los costos de
                    envío
                  </span>
                </li>
                <li>
                  <span className={styles["policy-icon"]}>
                    <img src="../public/plane.png" alt="Plane" />
                  </span>
                  <span className={styles["policy-desc"]}>
                    Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal
                  </span>
                </li>
              </ul>
              <div className={styles["checkout-process"]}>
                <div className={styles["top"]}>
                  <input type="number" min="1" value="1" />
                  <button type="button" className={styles["cart-btn"]}>
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PreDetails;
