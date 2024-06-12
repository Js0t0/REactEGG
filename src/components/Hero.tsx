const Hero = ({ first, second }) => {
  return (
    <>
      <section className="h-[200px] bg-[url('../public/hero_bg.png')] flex flex-wrap justify-center bg-cover bg-top  ">
        <article className="w-[1080px] flex flex-col items-start justify-center px-[0 20px]  ">
          <span className="text-5xl text-white font-bold ">{first}</span>
          <span className="text-8xl text-white  font-bold">{second}</span>
        </article>
      </section>
    </>
  );
};

export default Hero;
