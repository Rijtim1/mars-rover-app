'use client';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const Manifest = ({ manifest }) => {
  return (
    <Card className="bg-white shadow-md rounded-lg p-6">
      <CardHeader>
        <CardTitle>{manifest.name} Mission Manifest</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="missionDetails">
            <AccordionTrigger>Mission Details</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <p><strong>Landing Date:</strong> {manifest.landing_date}</p>
              <p><strong>Launch Date:</strong> {manifest.launch_date}</p>
              <p><strong>Status:</strong> {manifest.status}</p>
              <p><strong>Total Photos:</strong> {manifest.total_photos}</p>
              <p><strong>Max Sol:</strong> {manifest.max_sol}</p>
              <p><strong>Max Date:</strong> {manifest.max_date}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        {/* Additional footer content if needed */}
      </CardFooter>
    </Card>
  );
};

export default Manifest;
