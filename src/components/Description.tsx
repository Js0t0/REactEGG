import styles from "../views/Details.module.css";

const Description = ({ product }) => {
  return (
    <>
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
              {product.colors.map((i: string) => (
                <option key={i} value={i}>
                  {i}
                </option>
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
    </>
  );
};

export default Description;
