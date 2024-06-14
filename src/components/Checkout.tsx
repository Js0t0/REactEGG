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
      <div className="flex-col w-[340px] p-[10px] m-[10px]">
        <div className="bg-[#eaeaea] p-[33px] rounded-[2px]">
          <span className="text-[#ff3b3c]">Total:</span>
          <h2 id="price" className="text-[28px] font-bold mt-[10px]">
            ${(product.price * contador).toLocaleString()}
          </h2>
          <p className="leanding-[20.4px] break-words">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
            haciendo la solicitud en AFIP.
          </p>
          <ul className="p-0 list-none mb-[30px]">
            <li className="flex my-[15px] mx-0">
              <span className="mr-[15px]">
                <img
                  className="w-[50px]"
                  src="../public/truck.png"
                  alt="Truck"
                />
              </span>
              <span>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li className="flex my-[15px] mx-0">
              <span className="mr-[15px]">
                <img
                  className="w-[50px]"
                  src="../public/plane.png"
                  alt="Plane"
                />
              </span>
              <span>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className="gap-[20px]">
            <div className="flex mb-[10px]">
              <input
                className="h-[40px] rounded-[10px] border-none w-[62px] mr-[10px] py-0 pr-[10px] pl-[20px]"
                id="input-quantity"
                type="number"
                min="1"
                defaultValue={contador}
                ref={units}
                onChange={(e) => setContador(Number(e.target.value))}
              />
              <button
                type="button"
                className={
                  boton
                    ? "w-[100%] bg-black text-white font-bold border-none rounded-[10px] h-[40px] hover:bg-[#514f4f]"
                    : "w-[100%] bg-[#ff3b3c] text-white font-bold border-none rounded-[10px] h-[40px] hover:bg-[#ff5151]"
                }
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
