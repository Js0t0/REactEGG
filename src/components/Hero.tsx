const Hero = ({ first, second }) => {
  return (
    <>
      <section className="h-[200px] bg-[url('../public/hero_bg.png')] flex flex-wrap justify-center bg-cover bg-top  ">
        <article className="w-full  flex flex-col justify-center px-[20px]  ">
          <span className="text-[30px]  text-white font-bold md:text-[40px] ">
            {first}
          </span>
          <span className="   text-[60px] leading-[80px]   text-white font-bold break-words md:text-[100px]  ">
            {second}
          </span>
        </article>
      </section>
    </>
  );
};

export default Hero;
