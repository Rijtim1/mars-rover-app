'use client';
import { useState } from 'react';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const QueryForm = ({ onSubmit }) => {
  const [sol, setSol] = useState('');
  const [earthDate, setEarthDate] = useState('');
  const [camera, setCamera] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ sol, earthDate, camera });
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
      <div>
        <Label htmlFor="sol" className="block text-gray-700 text-sm font-medium mb-1">
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
        <Label htmlFor="earthDate" className="block text-gray-700 text-sm font-medium mb-1">
          Earth Date:
        </Label>
        <Input
          id="earthDate"
          type="date"
          value={earthDate}
          onChange={(e) => setEarthDate(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="camera" className="block text-gray-700 text-sm font-medium mb-1">
          Camera:
        </Label>
        <Select onValueChange={(value) => setCamera(value)} value={camera}>
          <SelectTrigger id="camera" className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Camera" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</SelectItem>
            <SelectItem value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</SelectItem>
            <SelectItem value="MAST">Mast Camera (MAST)</SelectItem>
            <SelectItem value="CHEMCAM">Chemistry and Camera Complex (CHEMCAM)</SelectItem>
            <SelectItem value="MAHLI">Mars Hand Lens Imager (MAHLI)</SelectItem>
            <SelectItem value="MARDI">Mars Descent Imager (MARDI)</SelectItem>
            <SelectItem value="NAVCAM">Navigation Camera (NAVCAM)</SelectItem>
            <SelectItem value="PANCAM">Panoramic Camera (PANCAM)</SelectItem>
            <SelectItem value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </Button>
    </Form>
  );
};

export default QueryForm;
