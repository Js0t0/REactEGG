import styles from "./OnsaleCard.module.css";

function OnSaleCard(prop) {
  const { title, price, image } = prop;
  return (
    <>
      <a className={styles["product-card"]}>
        <img className={styles["product-img"]} src={image} alt="image" />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["touch-price"]}>Desde</span>
          <span className={styles["touch-price-tached"]}> AR$ 104.860</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>${price}</span>
            <span className={styles["product-discount"]}>50% Off</span>
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    </>
  );
}
export default OnSaleCard;
