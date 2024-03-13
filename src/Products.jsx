import Details from "./Details";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const Filter = (event) => {
    if (event.target.value && event.target.value.length > 0) {
      setFilteredProducts(
        products.filter((f) =>
          f.title.toLowerCase().includes(event.target.value)
        )
      );
      console.log("if");
    } else {
      console.log("else");
      setFilteredProducts(products);
    }
    console.log({ products }, { filteredProducts });
  };
  // console.log("result", data);
  return (
    <div className="row">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={Filter}
        />
        {/* <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} /> */}
      </div>
      {filteredProducts?.length > 0 &&
        filteredProducts?.map((product, id) => <Details key={id} product={product} />)}
    </div>
  );
}
