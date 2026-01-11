export default function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>
        {product.onSale && (
          <span style={{ color: "pink" }}> Special Offer!</span>
        )}
      </p>
      <p>{product.price} kr</p>
      <p>{product.category}</p>
      <p style={{ color: product.inStock ? "green" : "red" }}>
        {product.inStock
          ? `${product.name} is in stock`
          : `${product.name} is out of stock`}
      </p>
    </li>
  );
}
