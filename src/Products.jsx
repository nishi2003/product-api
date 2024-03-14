// import Details from "./Details";
// import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setProducts(data.products);
//         data.products.forEach((p) => {
//           console.log(p.category);
//         });
//         setFilteredProducts(data.products);
//       });
//   }, []);

//   const Filter = (e) => {
//     if (e.target.value && e.target.value.length > 0) {
//       setFilteredProducts(
//         products.filter((f) =>
//           f.title.toLowerCase().includes(e.target.value)
//         )
//       );
//       console.log("if");
//     } else {
//       console.log("else");
//       setFilteredProducts(products);
//     }
//     console.log({ products }, { filteredProducts });
//   };
//   // console.log("result", data);

//   const handleFilter = (e) => {
//     let filtered = products;

//     if (minPrice && maxPrice) {
//       filtered = filtered.filter(
//         (product) =>
//           product.price >= parseFloat(minPrice) &&
//           product.price <= parseFloat(maxPrice)
//       );
//     } else if (minPrice) {
//       filtered = filtered.filter(
//         (product) => product.price >= parseFloat(minPrice)
//       );
//     } else if (maxPrice) {
//       filtered = filtered.filter(
//         (product) => product.price <= parseFloat(maxPrice)
//       );
//     }
//     console.log(e.target.value)
//     if(e.target.value){
//       filtered = filtered.filter(
//         (product) => product.category.includes(e.target.value)
//       );
//     }

//     setFilteredProducts(filtered);
//   };

//   const handleMinPriceChange = (e) => {
//     setMinPrice(e.target.value);
//   };

//   const handleMaxPriceChange = (e) => {
//     setMaxPrice(e.target.value);
//   };
//   return (
//     <div className="row">
//       <div className="header d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search"
//           onChange={Filter}
//         />
//         {/* <div className="price-selection">
//           <form action="#">
//             <label htmlFor="sort"></label>
//             <select
//               name="sort"
//               id="sort"
//               className="sort-selection--style"
//               onClick={handleFilter}
//             >
//               <option value="0" onClick={handleMinPriceChange}>
//                 Price(lowest)
//               </option>
//               <option value="highest" onClick={handleMaxPriceChange}>
//                 Price(highest)
//               </option> */}
//         <div className="price-selection d-flex">
//           <button className="btn d-grid border">
//             <input
//               type="number"
//               placeholder="Min price"
//               value={minPrice}
//               onChange={handleMinPriceChange}
//             />
//             <input
//               type="number"
//               placeholder="Max price"
//               value={maxPrice}
//               onChange={handleMaxPriceChange}
//             />
//           </button>
//           <button onClick={handleFilter}>Apply Filter</button>

//           {/* </select>
//           </form> */}
//         </div>
//         <form action="#">
//           <label htmlFor="sort"></label>
//           <select
//             name="sort"
//             id="sort"
//             placeholder="Category"
//             className="sort-selection--style"
//             onChange={handleFilter}
//           >
//             <option value="" onClick={handleMinPriceChange}>
//               All Categories
//             </option>

//             <option value="smartphones">smartphones</option>
//             <option value="laptops">laptops</option>
//             <option value="fragrances">fragrances</option>
//             <option value="skincare">skincare</option>
//             <option value="groceries">groceries</option>
//             <option value="home-decoration ">home-decoration</option>
//           </select>
//         </form>
//       </div>
//       {filteredProducts?.length > 0 &&
//         filteredProducts?.map((product, e) => (
//           <Details key={e} product={product} />
//         ))}
//     </div>
//   );
// }

// import Details from "./Details";
// import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [sortBy, setSortBy] = useState("title"); // Default sorting by title
//   const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data.products);
//         setFilteredProducts(data.products);
//       });
//   }, []);

//   const Filter = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     if (searchTerm && searchTerm.length > 0) {
//       setFilteredProducts(
//         products.filter((product) =>
//           product.title.toLowerCase().includes(searchTerm)
//         )
//       );
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   const handleFilter = () => {
//     let filtered = products;

//     if (minPrice && maxPrice) {
//       filtered = filtered.filter(
//         (product) =>
//           product.price >= parseFloat(minPrice) &&
//           product.price <= parseFloat(maxPrice)
//       );
//     } else if (minPrice) {
//       filtered = filtered.filter(
//         (product) => product.price >= parseFloat(minPrice)
//       );
//     } else if (maxPrice) {
//       filtered = filtered.filter(
//         (product) => product.price <= parseFloat(maxPrice)
//       );
//     }

//     if (filteredProducts.length > 0) {
//       filtered = filtered.filter((product) =>
//         filteredProducts.includes(product)
//       );
//     }

//     setFilteredProducts(filtered);
//   };

//   const handleMinPriceChange = (e) => {
//     setMinPrice(e.target.value);
//   };

//   const handleMaxPriceChange = (e) => {
//     setMaxPrice(e.target.value);
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   const toggleSortOrder = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     const aValue = a[sortBy];
//     const bValue = b[sortBy];

//     if (sortOrder === "asc") {
//       if (typeof aValue === "string" && typeof bValue === "string") {
//         return aValue.localeCompare(bValue);
//       } else {
//         return aValue - bValue;
//       }
//     } else {
//       if (typeof aValue === "string" && typeof bValue === "string") {
//         return bValue.localeCompare(aValue);
//       } else {
//         return bValue - aValue;
//       }
//     }
//   });

//   return (
//     <div className="row">
//       <div className="header d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search"
//           onChange={Filter}
//         />
//         <div className="price-selection d-flex">
//           <input
//             type="number"
//             placeholder="Min price"
//             value={minPrice}
//             onChange={handleMinPriceChange}
//           />
//           <input
//             type="number"
//             placeholder="Max price"
//             value={maxPrice}
//             onChange={handleMaxPriceChange}
//           />
//           <button onClick={handleFilter}>Apply Filter</button>
//         </div>
//         <div className="sort-selection d-flex">
//           <select value={sortBy} onChange={handleSortChange}>
//             <option value="title">Title</option>
//             <option value="price">Price</option>
//           </select>
//           <button onClick={toggleSortOrder}>
//             {sortOrder === "asc" ? "Ascending" : "Descending"}
//           </button>
//         </div>
//       </div>
//       {sortedProducts?.map((product, id) => (
//         <Details key={id} product={product} />
//       ))}
//     </div>
//   );
// }

import Details from "./Details";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
  const [sortBy, setSortBy] = useState("title"); // Default sorting by title
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const Filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const handleFilter = () => {
    let filtered = products;

    if (minPrice && maxPrice) {
      filtered = filtered.filter(
        (product) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
    } else if (minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    } else if (maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    // Apply category filter if a category is selected
    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.category.includes(selectedCategory)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      } else {
        return aValue - bValue;
      }
    } else {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return bValue.localeCompare(aValue);
      } else {
        return bValue - aValue;
      }
    }
  });

  return (
    <div className="row">
      <div className="header d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={Filter}
        />
        <div className="price-selection d-flex">
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          <button onClick={handleFilter}>Apply Filter</button>
        </div>
        <div className="category-selection d-flex">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
          </select>
        </div>
        <div className="sort-selection d-flex">
          <select value={sortBy} onChange={handleSortChange}>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
          <button onClick={toggleSortOrder}>
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>
      {sortedProducts?.map((product, id) => (
        <Details key={id} product={product} />
      ))}
    </div>
  );
}

// import Details from "./Details";
// import { useEffect, useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected category
//   const [sortBy, setSortBy] = useState("title"); // Default sorting by title
//   const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending
//   const [startIndex, setStartIndex] = useState(0);
//   const [numberOfProductsToLoad, setNumberOfProductsToLoad] = useState(30);

//   useEffect(() => {
//     fetchProducts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedCategory, minPrice, maxPrice, sortBy, sortOrder]); // Fetch products when filters change

//   const fetchProducts = () => {
//     setLoading(true);
//     fetch(
//       `https://dummyjson.com/products?skip=${startIndex}&limit=${numberOfProductsToLoad}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts([...products, ...data.products]);
//         setFilteredProducts([...products, ...data.products]);
//         setStartIndex(products.length);
//         if (startIndex + numberOfProductsToLoad >= data.total) {
//           console.log(products.length, startIndex, data.total);
//           setNumberOfProductsToLoad(
//             startIndex + numberOfProductsToLoad - data.total
//           );
//         }
//         console.log(products.length, startIndex);
//         console.log(products, filteredProducts);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };
//   const onScroll = () => {
//     // console.log(
//     //   Math.ceil(window.innerHeight),
//     //   Math.ceil(document.documentElement.scrollTop),
//     //   document.body.offsetHeight,
//     //   !loading
//     // );
//     if (
//       Math.ceil(window.innerHeight) +
//         Math.ceil(document.documentElement.scrollTop) >=
//         document.body.offsetHeight &&
//       !loading
//     ) {
//       fetchProducts();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [products, startIndex, numberOfProductsToLoad, loading]); // Add scroll event listener when filtered products change

//   // const fetchMoreData = () => {
//   //   setStartIndex((prevIndex) => prevIndex + numberOfProductsToLoad);
//   // };

//   const Filter = (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     if (searchTerm && searchTerm.length > 0) {
//       setFilteredProducts(
//         products.filter((product) =>
//           product.title.toLowerCase().includes(searchTerm)
//         )
//       );
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   const handleFilter = () => {
//     let filtered = products;

//     if (minPrice && maxPrice) {
//       filtered = filtered.filter(
//         (product) =>
//           product.price >= parseFloat(minPrice) &&
//           product.price <= parseFloat(maxPrice)
//       );
//     } else if (minPrice) {
//       filtered = filtered.filter(
//         (product) => product.price >= parseFloat(minPrice)
//       );
//     } else if (maxPrice) {
//       filtered = filtered.filter(
//         (product) => product.price <= parseFloat(maxPrice)
//       );
//     }

//     // Apply category filter if a category is selected
//     if (selectedCategory) {
//       filtered = filtered.filter((product) =>
//         product.category.includes(selectedCategory)
//       );
//     }

//     setFilteredProducts(filtered);
//   };

//   const handleMinPriceChange = (e) => {
//     setMinPrice(e.target.value);
//   };

//   const handleMaxPriceChange = (e) => {
//     setMaxPrice(e.target.value);
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   const toggleSortOrder = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     const aValue = a[sortBy];
//     const bValue = b[sortBy];

//     if (sortOrder === "asc") {
//       if (typeof aValue === "string" && typeof bValue === "string") {
//         return aValue.localeCompare(bValue);
//       } else {
//         return aValue - bValue;
//       }
//     } else {
//       if (typeof aValue === "string" && typeof bValue === "string") {
//         return bValue.localeCompare(aValue);
//       } else {
//         return bValue - aValue;
//       }
//     }
//   });

//   return (
//     <div className="row">
//       <div className="header d-flex">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search"
//           onChange={Filter}
//         />
//         <div className="price-selection d-flex">
//           <input
//             type="number"
//             placeholder="Min price"
//             value={minPrice}
//             onChange={handleMinPriceChange}
//           />
//           <input
//             type="number"
//             placeholder="Max price"
//             value={maxPrice}
//             onChange={handleMaxPriceChange}
//           />
//           <button onClick={handleFilter}>Apply Filter</button>
//         </div>
//         <div className="category-selection d-flex">
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             <option value="smartphones">Smartphones</option>
//             <option value="laptops">Laptops</option>
//             <option value="fragrances">Fragrances</option>
//             <option value="skincare">Skincare</option>
//             <option value="groceries">Groceries</option>
//             <option value="home-decoration">Home Decoration</option>
//           </select>
//         </div>
//         <div className="sort-selection d-flex">
//           <select value={sortBy} onChange={handleSortChange}>
//             <option value="title">Title</option>
//             <option value="price">Price</option>
//           </select>
//           <button onClick={toggleSortOrder}>
//             {sortOrder === "asc" ? "Ascending" : "Descending"}
//           </button>
//         </div>
//       </div>
//       {sortedProducts?.map((product, id) => (
//         <Details key={id} product={product} />
//       ))}
//     </div>
//   );
// }
