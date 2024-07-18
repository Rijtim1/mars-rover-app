import { useState, useEffect } from "react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const QueryForm = ({ onSubmit }) => {
  const [sol, setSol] = useState("");

  useEffect(() => {
    console.log("Sol changed:", sol);
  }, [sol]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { sol });
    onSubmit({ sol });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div>
        <Label
          htmlFor="sol"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Martian Sol:
        </Label>
        <Input
          id="sol"
          type="number"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
        />
      </div>
      <div>
        <Input
          type="submit"
          value="Search"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        />
      </div>
    </Form>
  );
};

export default QueryForm;
