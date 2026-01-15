import Rating from "./Rating";

const ProductItem = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>
        <img src={product.image} alt={product.title} className="w-100" />
      </td>
      <td>
        <Rating count={product.rating.count} rate={product.rating.rate} />
      </td>
    </tr>
  );
};

export default ProductItem;
