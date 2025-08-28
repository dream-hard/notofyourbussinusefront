import React from "react";

const MetadataDisplay = ({ metadata }) => {
  if (!metadata || Object.keys(metadata).length === 0) {
    return <div className="text-muted">No metadata available.</div>;
  }

  return (
    <div className="metadata-display d-flex flex-wrap gap-2">
      {Object.entries(metadata).map(([key, value]) => (
        <div
          key={key}
          className="p-2 border rounded bg-light d-flex flex-column align-items-start"
          style={{ minWidth: "120px", flex: "1 1 120px" }}
        >
          <span className="fw-bold text-primary">{key}</span>
          <span className="text-dark">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default MetadataDisplay;
