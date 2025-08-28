import { useState } from "react";

export function SlideInDrawerTable() {
  const [selected, setSelected] = useState(null);

  const data = [
    { id: 1, name: "Item A", price: "$20" },
    { id: 2, name: "Item B", price: "$30" },
  ];

  const openDrawer = (item) => {
    setSelected(item);
    const drawer = new window.bootstrap.Offcanvas(
      document.getElementById("drawer")
    );
    drawer.show();
  };

  return (
    <div className="container py-4">
      <h3>Slide-In Drawer Table</h3>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{cursor:"pointer"}} onClick={() => openDrawer(item)}>
              <td>{item.id}</td><td>{item.name}</td><td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="offcanvas offcanvas-end w-75" id="drawer">
        <div className="offcanvas-header bg-dark text-white">
          <h5>Item Details</h5>
          <button className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          {selected && (
            <>
              <h4>{selected.name}</h4>
              <p>Price: {selected.price}</p>
              <p>Extra details shown here...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
