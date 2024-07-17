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
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Martian Sol:</label>
        <input
          type="number"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Earth Date:</label>
        <input
          type="date"
          value={earthDate}
          onChange={(e) => setEarthDate(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-1">Camera:</label>
        <select
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default QueryForm;
