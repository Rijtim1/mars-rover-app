'use client';

const Manifest = ({ manifest }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{manifest.name} Mission Manifest</h2>
      <p className="mb-2"><strong>Landing Date:</strong> {manifest.landing_date}</p>
      <p className="mb-2"><strong>Launch Date:</strong> {manifest.launch_date}</p>
      <p className="mb-2"><strong>Status:</strong> {manifest.status}</p>
      <p className="mb-2"><strong>Total Photos:</strong> {manifest.total_photos}</p>
      <p className="mb-2"><strong>Max Sol:</strong> {manifest.max_sol}</p>
      <p className="mb-2"><strong>Max Date:</strong> {manifest.max_date}</p>
    </div>
  );
};

export default Manifest;
