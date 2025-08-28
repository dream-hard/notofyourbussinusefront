import React, { useState } from 'react';
import './optionselector.css'

const OPTIONS = [
  { id: 1, label: 'Free Shipping' },
  { id: 2, label: 'In Stock' },
  { id: 3, label: 'On Sale' },
  { id: 4, label: 'New Arrival' },
  { id: 4, label: 'New Arrival' },
  { id: 4, label: 'New Arrival' },
  { id: 8, label: 'New Arrival' },
];

export default function OptionSelector({title,options=[],onChange,selectedFilters=[]}) {

  // Add option if not already selected
  const handleAdd = (e) => {
    const id = parseInt(e.target.value);
    if (!id) return;
    const selected=options.find(opt=>opt.id===id);
    if (selected && !selectedFilters.find(opt => opt.id === id)) {
      const newSelected=[...selectedFilters,selected];
      onChange && onChange(title,newSelected);
    }
    e.target.value = ''; // reset select
  };

  // Remove option by id
  const handleRemove = (id) => {
        const newSelected = selectedFilters.filter(opt => opt.id !== id);
    onChange && onChange(title, newSelected);
  };

  return (

    <div className="mt-4 p-4 bg-white rounded shadow-sm sidecontainer" style={{ maxWidth: 400 }}>
  <label
    htmlFor={`option-select-${title}`} 
    className="form-label fw-semibold mb-3"
    style={{ fontSize: '1.1rem' }}
  >
    {title}
  </label>

  <select
    id={`option-select-${title}`}
    className="form-select form-select-lg mb-4"
    onChange={handleAdd}
    defaultValue=""
    style={{
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderColor: '#ced4da',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    }}
    onFocus={e => {
      e.target.style.borderColor = '#4e9af1';
      e.target.style.boxShadow = '0 0 6px #4e9af1';
    }}
    onBlur={e => {
      e.target.style.borderColor = '#ced4da';
      e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }}
  >
    <option value="" disabled>
      -- اختر --
    </option>
    {OPTIONS.map(opt => (
      <option key={opt.id} value={opt.id}>
        {opt.label}
      </option>
    ))}
  </select>

  <div className="d-flex flex-wrap gap-2">
    {selectedFilters.map(opt => (
      <span
        key={opt.id}
        className="badge rounded-pill bg-primary d-flex align-items-center gap-2"
        style={{
          fontSize: '0.9rem',
          padding: '0.45em 1rem',
          userSelect: 'none',
          boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
          cursor: 'default',
        }}
      >
        {opt.label}
        <button
          type="button"
          className="btn-close btn-close-white btn-sm"
          aria-label="حذف"
          onClick={() => handleRemove(opt.id)}
          style={{ cursor: 'pointer' }}
        />
      </span>
    ))}
  </div>
</div>

  );
}
