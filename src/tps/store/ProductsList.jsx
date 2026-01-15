import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const [products, setproducts] = useState([]); // parce que le web service retourne une list des objets
  const [search, setsearch] = useState("");
  const [categories, setcategories] = useState([]);

  const getAllCategories = () => {
    const buttonsOfCategories = categories.map((c) => (
      <button key={c}>{c}</button>
    ));
    return buttonsOfCategories;
  };

  const getProducts = () => {
    if (products.length > 0)
      return products.map((p) => <ProductItem key={p.id} product={p} />);
    return (
      <tr>
        <td colSpan="7">No Item</td>
      </tr>
    );
  };

  const consumeProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(
        (response) => response.json() // pour convertir json pure a un objet js
      )
      .then((data) => {
        setproducts(data);
      })
      .catch((err) => console.log(err));
  };

  const consumeCatégories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => data.json())
      .then((data) => setcategories(data));
  };

  useEffect(() => {
    consumeProducts();
    consumeCatégories();
  }, []);

  const handleSearch = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedProduct = products.filter((p) => p.title.includes(search));
    setproducts(searchedProduct);
  };

  return (
    <div className="container">
      <h3 className="text-center my-5">Liste des produits</h3>
      <form onSubmit={handleSubmit}>
        <label className="mx-2">Search:</label>
        <input
          className="border-1 rounded-3 h-auto"
          type="search"
          onChange={handleSearch}
        />
        <input
          className="btn btn-primary mx-1 px-1"
          type="submit"
          value="Search"
        />
        <div>{getAllCategories()}</div>
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Categorie</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{getProducts()}</tbody>
      </table>
    </div>
  );
};

export default ProductsList;
