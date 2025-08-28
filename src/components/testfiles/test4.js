import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Item A", price: "$20" },
  { id: 2, name: "Item B", price: "$30" },
];

function TablePage() {
  return (
    <div className="container py-4">
      <h3>Table Page</h3>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr><th>ID</th><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to={`/details/${item.id}`}>{item.name}</Link></td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetailsPage() {
  const { id } = useParams();
  const item = data.find((x) => x.id.toString() === id);
  return (
    <div className="container py-4">
      <h3>Details Page</h3>
      {item ? (
        <>
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
        </>
      ) : (
        <p>Item not found</p>
      )}
      <Link to="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
}

export function OpenNewPageApp() {
  return (

      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
  
  );
}
