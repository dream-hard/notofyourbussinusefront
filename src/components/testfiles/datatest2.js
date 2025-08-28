import React from "react";

const ProductDetailsForm = ({ product }) => {
  return (
    <div className="container">
      {/* Title & Category */}
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" value={product.title} disabled />
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className="form-control"
          value={product.Category?.name || ""}
          disabled
        />
      </div>

      {/* Slugs */}
      <div className="mb-3">
        <label className="form-label">Slug</label>
        <input type="text" className="form-control" value={product.product_slug} disabled />
      </div>

      {product.slugs?.length > 0 && (
        <div className="mb-3">
          <label className="form-label">Aliases</label>
          <input
            type="text"
            className="form-control"
            value={product.slugs.join(", ")}
            disabled
          />
        </div>
      )}

      {/* Prices */}
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            value={`${product.Currency?.symbol || ""}${product.price}`}
            disabled
          />
        </div>
        <div className="col">
          <label className="form-label">Original Price</label>
          <input
            type="text"
            className="form-control"
            value={
              product.original_price
                ? `${product.Currency?.symbol || ""}${product.original_price}`
                : ""
            }
            disabled
          />
        </div>
      </div>

      {/* Stock & Warranty */}
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            value={product.stock_quantity_fy}
            disabled
          />
        </div>
        <div className="col">
          <label className="form-label">Warranty</label>
          <input
            type="text"
            className="form-control"
            value={
              product.warranty
                ? `${product.warranty_period} months`
                : "No Warranty"
            }
            disabled
          />
        </div>
      </div>

      {/* Flags (booleans as checkboxes) */}
      <div className="mb-3">
        <label className="form-label">Options</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={product.featured} disabled />
          <label className="form-check-label">Featured</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={product.upcoming} disabled />
          <label className="form-check-label">Upcoming</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={product.negotiable} disabled />
          <label className="form-check-label">Negotiable</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={product.isactive_name} disabled />
          <label className="form-check-label">Active</label>
        </div>
      </div>

      {/* Metadata */}
      <div className="mb-3">
        <label className="form-label">Specifications (Metadata)</label>
        {product.metadata &&
          Object.entries(product.metadata).map(([key, val]) => (
            <input
              key={key}
              type="text"
              className="form-control mb-2"
              value={`${key}: ${val}`}
              disabled
            />
          ))}
      </div>

      {/* Attributes */}
      <div className="mb-3">
        <label className="form-label">Attributes</label>
        {product.Product_attributes?.map((attr) => (
          <input
            key={attr.id}
            type="text"
            className="form-control mb-2"
            value={`${attr.Attribute_option?.Attribute_type?.name}: ${attr.Attribute_option?.name}`}
            disabled
          />
        ))}
      </div>

      {/* Seller Info */}
      <div className="mb-3">
        <label className="form-label">Seller Info</label>
        <input
          type="text"
          className="form-control mb-2"
          value={product.User?.username || ""}
          disabled
        />
        <input
          type="text"
          className="form-control mb-2"
          value={product.User?.email || ""}
          disabled
        />
        <input
          type="text"
          className="form-control"
          value={product.User?.phone_number || ""}
          disabled
        />
      </div>
    </div>
  );
};

export default ProductDetailsForm;
