import { useState } from "react";

export default function Test5() {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, name: "Product A", price: "$20", status: "Available" },
    { id: 2, name: "Product B", price: "$30", status: "Out of Stock" },
    { id: 3, name: "Product C", price: "$40", status: "Available" },
  ];

  const handleRowClick = (item) => {
    setSelectedItem(item);
    const modal = new window.bootstrap.Modal(
      document.getElementById("itemModal")
    );
    modal.show();
  };

  const handleUpdate = (item) => {
    alert(`Update clicked for ${item.name}`);
    // You can open another modal for editing here
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      alert(`Deleted ${item.name}`);
      // Implement actual delete logic here
    }
  };

  return (
    <div className="container-fluid py-5">
      <h2 className="mb-4">Modern Table</h2>
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
              <tr key={item.id} style={{ cursor: "pointer" }}>
                <td onClick={() => handleRowClick(item)}>{item.id}</td>
                <td onClick={() => handleRowClick(item)}>{item.name}</td>
                <td onClick={() => handleRowClick(item)}>{item.price}</td>
                <td onClick={() => handleRowClick(item)}>
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
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleUpdate(item)}
                    >
                      <i className="bi bi-pencil-square"></i> Update
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Large Popup Modal */}
      <div
        className="modal fade"
        id="itemModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Item Details</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedItem ? (
                <div className="p-3">
                  <h4>{selectedItem.name}</h4>
                  <p>
                    <strong>Price:</strong> {selectedItem.price}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedItem.status}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel sapien vitae nulla mattis commodo.
                  </p>
                </div>
              ) : (
                <p>No item selected</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Take Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
