import { useState } from "react";

export function ExpandableRowTable() {
  const [expanded, setExpanded] = useState(null);

  const data = [
    { id: 1, name: "Item A", price: "$20", desc: "Extra info about Item A" },
    { id: 2, name: "Item B", price: "$30", desc: "Extra info about Item B" },
  ];

  return (
    <div className="container py-4">
      <h3>Expandable Row Table</h3>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <>
              <tr key={item.id} style={{cursor:"pointer"}} onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                <td>{item.id}</td><td>{item.name}</td><td>{item.price}</td>
              </tr>
              {expanded === item.id && (
                <tr>
                  <td colSpan="3" className="bg-light">
                    <strong>Details:</strong> {item.desc}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
