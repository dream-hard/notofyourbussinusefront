import React, { useEffect, useState } from "react";
import axios from "axios";

const AddProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [formData, setFormData] = useState({
    cat: "",
    user: 1, // example default user id
    status: 1,
    condition: 1,
    currency: "",
    title: "",
    quantity: 0,
    price: 0,
    original_price: 0,
    discount: false,
    featured: false,
    upcoming: false,
    negotiable: false,
    warranty: false,
    warranty_peroid: 0,
    latest: false,
    available: true,
    active_name: true,
    active_number: true,
    active_prcie: true,
    metadata: "{}",
  });
  const [images, setImages] = useState([]);

  // fetch categories & currencies
  useEffect(() => {
    axios.get("/api/categories/justgetall").then(res => setCategories(res.data));
    axios.get("/api/currencies").then(res => setCurrencies(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({ file, type: "sup" })); // default type sub
    setImages(prev => [...prev, ...newImages]);
  };

  const handleImageTypeChange = (index, type) => {
    const updated = [...images];
    updated[index].type = type;
    setImages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      images.forEach((img, idx) => {
        data.append("files", img.file);
        data.append(`image_type_${img.file.name}`, img.type);
      });
      const res = await axios.post("/api/products/createProductWithImages", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Product created!");
      console.log(res.data);
      setFormData({
        cat: "", user: 1, status: 1, condition: 1, currency: "", title: "", quantity: 0,
        price: 0, original_price: 0, discount: false, featured: false, upcoming: false,
        negotiable: false, warranty: false, warranty_peroid: 0, latest: false, available: true,
        active_name: true, active_number: true, active_prcie: true, metadata: "{}"
      });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Error creating product: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select" name="cat" value={formData.cat} onChange={handleChange} required>
            <option value="">Select category</option>
            {categories.map(c => <option key={c.uuid} value={c.uuid}>{c.name}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Currency</label>
          <select className="form-select" name="currency" value={formData.currency} onChange={handleChange} required>
            <option value="">Select currency</option>
            {currencies.map(c => <option key={c.uuid} value={c.uuid}>{c.currency_iso}</option>)}
          </select>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="col">
            <label className="form-label">Original Price</label>
            <input type="number" className="form-control" name="original_price" value={formData.original_price} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Metadata (JSON)</label>
          <textarea className="form-control" name="metadata" rows="3" value={formData.metadata} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Images</label>
          <input type="file" multiple className="form-control" onChange={handleImageChange} />
          {images.map((img, idx) => (
            <div key={idx} className="d-flex align-items-center mt-2">
              <span>{img.file.name}</span>
              <select className="form-select w-auto ms-2" value={img.type} onChange={(e) => handleImageTypeChange(idx, e.target.value)}>
                <option value="main">Main</option>
                <option value="sup">Sub</option>
              </select>
            </div>
          ))}
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" name="discount" checked={formData.discount} onChange={handleChange} />
          <label className="form-check-label">Discount</label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
          <label className="form-check-label">Featured</label>
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
