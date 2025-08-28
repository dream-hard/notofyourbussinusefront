import React, { useState } from "react";

const ProductDetailsExample = () => {
  // Example product data
  const [product, setProduct] = useState({
    uuid: "1234-abcd",
    category_id: "cat-uuid",
    user_id: "user-uuid",
    status_id: 1,
    condition_id: 2,
    currency_id: "USD",
    title: "Sample Product",
    slug: "sample-product",
    description: "This is a sample product.",
    stock_quantity_fy: 10,
    isactive_name: true,
    isactive_price: true,
    isactive_phonenumber: false,
    isAvailable: true,
    featured: false,
    upcoming: true,
    negotiable: false,
    warranty: true,
    warranty_period: 12,
    latest: false,
    discount: true,
    price: 199.99,
    original_price: 249.99,
    metadata: { color: "red", size: "M" },
    softdelete: false,
  });

  // Boolean fields
  const booleanFields = [
    { name: "isactive_name", label: "Show Name" },
    { name: "isactive_price", label: "Show Price" },
    { name: "isactive_phonenumber", label: "Show Phone" },
    { name: "isAvailable", label: "Available" },
    { name: "featured", label: "Featured" },
    { name: "upcoming", label: "Upcoming" },
    { name: "negotiable", label: "Negotiable" },
    { name: "warranty", label: "Warranty" },
    { name: "latest", label: "Latest" },
    { name: "discount", label: "Discount" },
    { name: "softdelete", label: "Deleted" },
  ];

  const handleToggle = (fieldName) => {
    setProduct((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  return (
    <div className="p-4">
      <h3>Product Details</h3>

      {/* Text/number inputs */}
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" value={product.title} disabled className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Slug</label>
        <input type="text" value={product.slug} disabled className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea value={product.description} disabled className="form-control" rows={3}></textarea>
      </div>

      <div className="mb-3 d-flex gap-3">
        <div className="flex-1">
          <label className="form-label">Price</label>
          <input type="number" value={product.price} disabled className="form-control" />
        </div>
        <div className="flex-1">
          <label className="form-label">Original Price</label>
          <input type="number" value={product.original_price} disabled className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Stock Quantity</label>
        <input type="number" value={product.stock_quantity_fy} disabled className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Currency</label>
        <input type="text" value={product.currency_id} disabled className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Warranty Period (months)</label>
        <input type="number" value={product.warranty_period} disabled className="form-control" />
      </div>

      {/* Metadata */}
      <div className="mb-3">
        <label className="form-label">Metadata</label>
        <textarea value={JSON.stringify(product.metadata, null, 2)} disabled className="form-control" rows={3}></textarea>
      </div>

      {/* Boolean fields as cards */}
      <h5>Flags</h5>
      <div className="mb-3 d-flex flex-wrap gap-3">
        {booleanFields.map((field) => (
          <div
            key={field.name}
            className="card p-3 checkbox-card"
            style={{ minWidth: "150px", flex: "1 1 150px", cursor: "pointer" }}
          >
            <span className="fw-bold mb-2 d-block">{field.label}</span>
            <div className="form-switch-custom">
              <input
                type="checkbox"
                checked={product[field.name]}
                readOnly
                className="form-switch-input"
                
              />
              <label className="form-switch-label">
                <span className="form-switch-button"></span>
              </label>
            </div>
            <small className="text-muted mt-1">
              {product[field.name] ? "Enabled" : "Disabled"}
            </small>
          </div>
        ))}
      </div>

      <style jsx>{`
        .checkbox-card {
          transition: all 0.3s ease;
          border-radius: 10px;
          background-color: #f8f9fa;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .checkbox-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background-color: #e9ecef;
        }

        .form-switch-custom {
          position: relative;
          width: 50px;
          height: 24px;
        }

        .form-switch-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .form-switch-label {
          position: absolute;
          cursor: pointer;
          background-color: #ccc;
          border-radius: 30px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: background-color 0.3s;
        }

        .form-switch-label .form-switch-button {
          position: absolute;
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.3s;
        }

        .form-switch-input:checked + .form-switch-label {
          background-color: #4caf50;
        }

        .form-switch-input:checked + .form-switch-label .form-switch-button {
          transform: translateX(26px);
        }
      `}</style>
    </div>
  );
};

export default ProductDetailsExample;
