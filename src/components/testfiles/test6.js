import { useState } from "react";

export default function Test6() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, name: "Product A", price: "$20", status: "Available" },
    { id: 2, name: "Product B", price: "$30", status: "Out of Stock" },
    { id: 3, name: "Product C", price: "$40", status: "Available" },
  ];

  const openDrawer = (item) => {
    setSelectedItem(item);
    const drawer = new window.bootstrap.Offcanvas(
      document.getElementById("itemDrawer")
    );
    drawer.show();
  };

  return (
    <div className="container-fluid py-5">
      <h2 className="mb-4">Modern Table with Drawer</h2>
      <div className="table-responsive shadow rounded">
        <table className="table table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}
                                style={{ cursor: "pointer", fontWeight: "500" }}
                  onClick={() => openDrawer(item)}>
                <td>{item.id}</td>
                <td

                >
                  {item.name}
                </td>
                <td>{item.price}</td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "Available" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-pencil-square"></i> Update
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Offcanvas Drawer */}
      <div
        className="offcanvas offcanvas-end w-75"
        id="itemDrawer"
        tabIndex="-1"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title">Item Details</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {selectedItem ? (
            <div className="p-3">
              <h4>{selectedItem.name}</h4>
              <p>
                <strong>Price:</strong> {selectedItem.price}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`badge ${
                    selectedItem.status === "Available"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {selectedItem.status}
                </span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel sapien vitae nulla mattis commodo.
              </p>
              <button className="btn btn-primary me-2">
                <i className="bi bi-cart-plus"></i> Take Action
              </button>
              <button className="btn btn-outline-secondary">
                <i className="bi bi-x-circle"></i> Close
              </button>
            </div>
          ) : (
            <p>No item selected</p>
          )}
        </div>
      </div>
    </div>
  );
}
