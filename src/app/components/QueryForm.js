'use client';

import { useState } from 'react';

const QueryForm = ({ onSubmit }) => {
  const [sol, setSol] = useState('');
  const [earthDate, setEarthDate] = useState('');
  const [camera, setCamera] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ sol, earthDate, camera });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700" htmlFor="sol">Martian Sol:</label>
        <input
          type="number"
          id="sol"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="earthDate">Earth Date:</label>
        <input
          type="date"
          id="earthDate"
          value={earthDate}
          onChange={(e) => setEarthDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="camera">Camera:</label>
        <select
          id="camera"
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="FHAZ">FHAZ</option>
          <option value="RHAZ">RHAZ</option>
          <option value="MAST">MAST</option>
          <option value="CHEMCAM">CHEMCAM</option>
          <option value="MAHLI">MAHLI</option>
          <option value="MARDI">MARDI</option>
          <option value="NAVCAM">NAVCAM</option>
          <option value="PANCAM">PANCAM</option>
          <option value="MINITES">MINITES</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default QueryForm;
