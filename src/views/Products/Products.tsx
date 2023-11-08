import React from "react";
import { dumbProducts } from "../../models/DumbProducts";
import "./Products.css";

const Products: React.FC = () => {
  // Aqui você renderiza os produtos na UI
  return (
    <div className="container">
      <div className="container-products">
        {dumbProducts.map((product) => (
          <div className="products-card">
            <div key={product.id}>
              <div className="image">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
              </div>
              <div className="products-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-brand">{product.brand}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="Description">
                  <b>Descrição:</b> {product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
