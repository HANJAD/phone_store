import Header from "../components/Header";
import CardItem from "../components/CardItem";
import { products } from "../assets/products";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <h1 className="text-center mt-5 pt-5">Product Details</h1>
      <div className="d-flex flex-wrap justify-content-center gap-4 bg-gradient">
        {/* {products.map((item, index) => (
          <CardItem
            key={item.id}
            product={item}
          />
        ))} */}
        {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <CardItem key={item.id} product={item} />
            ))
          ) : (
            <div className="text-center mt-5">
              <h3>No products found for "{searchTerm}"</h3>
              <button className="btn btn-info" onClick={() => setSearchTerm("")}>
                Clear Search
              </button>
            </div>
          )}
      </div>
    </>
  );
};

export default Home;
