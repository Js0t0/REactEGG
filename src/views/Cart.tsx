import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CartCard from "./CartCard";
import CartResume from "./CartResume";
const Cart = () => {
  return (
    <>
      <NavBar />
      <Hero first={"mi"} second={"carrito"} />
      <main className=" sm:flex-col md:w-full  md:flex md:justify-center md:items-center md:p-[20px] ">
        <CartCard />
        <CartResume />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
