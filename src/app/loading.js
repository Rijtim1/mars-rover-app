// /pages/loading.js
import "./globals.css"; // Make sure the path is correct if you're using a different CSS file

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <h1 className="ml-4 text-lg font-bold">Loading...</h1>
    </div>
  );
}
