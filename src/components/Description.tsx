const Description = ({ product }) => {
  return (
    <>
      <div className="w-[340px] p-[10px] m-[10px] flex-col">
        <h1 className="text-black text-[28px] font-bold break-words mt-0">
          {product.title}
        </h1>
        <form className="mt-[30px]">
          <fieldset className="border-none p-0 flex flex-col">
            <label
              className="text-black text-[12px] font-bold"
              htmlFor={"color"}
            >
              Color
            </label>
            <select
              className="w-[100%] h-[40px] bg-white rounded-[10px] border-solid border border-[#eaeaea] my-[10px] mx-0 p-[10px] box-border "
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
        <div className="mt-[30px] leading-[20px] text-[12px] font-normal text-[#383838] mb-[5px]">
          <span className="text-black text-[12px] font-bold">Descripción</span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Description;
