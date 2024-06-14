import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
const NotFound = () => {
  return (
    <>
      <NavBar />
      <Hero first={"Error"} second={"404"} />
      <main></main>
      <Footer />
    </>
  );
};

export default NotFound;
