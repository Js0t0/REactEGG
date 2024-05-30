import styles from "./Details.module.css";

const PreDetails = (props) => {
  const { id, title, price, color, image, description } = props;
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{price}</div>
      <div>{color}</div>
      <div>{image}</div>
      <div>{description}</div>
      <div className={styles["details-container"]}>
        <div className={styles["sales-block"]}>
          <h2 className={styles["sales-title"]}>Week Sale</h2>
          <div id="product-container" className={styles["product-container"]}>
            <a className={styles["product-card"]} href="./details.html">
              <img
                className={styles["product-img"]}
                src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                alt="iPad Pro 12.9"
              />
              <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>iPad Pro 12.9</span>
                <span className={styles["product-description"]}>Silver</span>
                <div className={styles["product-price-block"]}>
                  <span className={styles["product-price"]}>900000</span>
                  <span className={styles["product-discount"]}>50% Off</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
            <a className={styles["product-card"]} href="./details.html">
              <img
                className={styles["product-img"]}
                src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                alt="iPad Pro 12.9"
              />
              <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>iPad Pro 12.9</span>
                <span className={styles["product-description"]}>Silver</span>
                <div className={styles["product-price-block"]}>
                  <span className={styles["product-price"]}>900000</span>
                  <span className={styles["product-discount"]}>50% Off</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
            <a className={styles["product-card"]} href="./details.html">
              <img
                className={styles["product-img"]}
                src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
                alt="iPad Pro 12.9"
              />
              <div className={styles["product-info"]}>
                <span className={styles["product-title"]}>iPad Pro 12.9</span>
                <span className={styles["product-description"]}>Silver</span>
                <div className={styles["product-price-block"]}>
                  <span className={styles["product-price"]}>900000</span>
                  <span className={styles["product-discount"]}>50% Off</span>
                </div>
                <div className={styles["product-tax-policy"]}>
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreDetails;
