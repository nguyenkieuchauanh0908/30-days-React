import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "The complete guide to gardening",
    description:
      "Gardening can be difficult to differentiate from farming. They are most easily differentiated based on their primary objectives. Farming prioritizes saleable goods and may include livestock production whereas gardening often prioritizes aesthetics and leisure. ",
  },
  {
    id: "p2",
    price: 8,
    title: "How to become billionare",
    description:
      "Forbes Real-Time Billionaires rankings tracks the daily ups and downs of the world’s richest people. ",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
