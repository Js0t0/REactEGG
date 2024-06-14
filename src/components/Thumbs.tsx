import { useState, useEffect } from "react";

function Thumbs({ product }) {
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
  useEffect(() => setThumb(product.images[0]), [product.id, product.images]);
  return (
    <section className="w-[340px] p-[10px] m-[10px] flex">
      <div className="w-{44px} m-[3px]">
        {product.images.map((each) => (
          <img
            className="w-[40px] h-[40px] object-cover"
            key={each}
            src={each}
            alt={product.title}
            onClick={() => setThumb(each)}
          />
        ))}
      </div>
      <img
        className="w-[280px] h-[280px] object-cover"
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}

export default Thumbs;
