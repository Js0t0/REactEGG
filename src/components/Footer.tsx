const Footer = () => {
  return (
    <>
      <footer className=" min-h-[250px] bg-[#7525a7] flex flex-col items-center">
        <div
          id="footer"
          className="w-full flex flex-col justify-between items-center p-[10px]
          sm:flex-row sm:items-start sm:justify-center
          "
        >
          <ul className="w-[170px] list-none p-[10px] ">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="./index.html">
                Ofertas
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Laptops
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Audio
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px] ">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Envios
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px] ">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Impuestos
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px] ">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className="py-[5px] px-0">
              <a className="text-white no-underline" href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="w-[170px] list-none p-[10px] ">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full border-t-[1px]  border-[#ba53fb] text-center text-white font-bold py-[30px]  box-border">
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
};

export default Footer;
