'use client';

const Manifest = ({ manifest }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{manifest.name} Mission Manifest</h2>
      <div className="space-y-2">
        <p><strong>Landing Date:</strong> {manifest.landing_date}</p>
        <p><strong>Launch Date:</strong> {manifest.launch_date}</p>
        <p><strong>Status:</strong> {manifest.status}</p>
        <p><strong>Total Photos:</strong> {manifest.total_photos}</p>
        <p><strong>Max Sol:</strong> {manifest.max_sol}</p>
        <p><strong>Max Date:</strong> {manifest.max_date}</p>
      </div>
    </div>
  );
};

export default Manifest;
